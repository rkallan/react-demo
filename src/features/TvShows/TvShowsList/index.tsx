import { useEffect, useState, useCallback } from "react";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import {
    getTvShowsLoading,
    getIsLastUpdatedLoaded,
    getTvShowsList,
    getTvShowsListLength,
    getTvShowsSearchValue,
    getTvShowsError,
    getLastUpdatedError,
} from "features/TvShows/tvShowsSelector";
import { fetchTvShows } from "features/TvShows/tvShowsSlice";
import { getFooterBoundingClientRect } from "features/layout/layoutSelector";
import { Loading, NavigationLink } from "@rrkallan/ui-library";
import { TypeEntitiesList } from "features/TvShows/types";
import styles from "./resources/styles/tvShowsList.module.scss";
import noImage from "./resources/images/no-image.png";

const Notification = loadable(() => import(/* webpackChunkName: "Notification" */ "@rrkallan/ui-library/Notification"), {
    fallback: <Loading />,
});

const Pagination = loadable(() => import(/* webpackChunkName: "Pagination" */ "@rrkallan/ui-library/Pagination"), {
    fallback: <Loading />,
});

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

function TvShowsList(): JSX.Element | null {
    const dispatch = useAppDispatch();
    const lastUpdatedLoaded = useAppSelector(getIsLastUpdatedLoaded);
    const lastUpdatedError = useAppSelector(getLastUpdatedError);
    const tvShowsError = useAppSelector(getTvShowsError);
    const tvShowsLoading = useAppSelector(getTvShowsLoading);
    const tvShowsList = useAppSelector(getTvShowsList);
    const tvShowsListLength = useAppSelector(getTvShowsListLength);
    const searchValue = useAppSelector(getTvShowsSearchValue);
    const { height } = useAppSelector(getFooterBoundingClientRect);
    const [tvShowsPageItems, setTvShowsPageItems] = useState((): TypeEntitiesList[] => []);

    const getPageContent = useCallback((currentData: TypeEntitiesList[]) => {
        setTvShowsPageItems(currentData);
    }, []);

    useEffect(() => {
        if (lastUpdatedLoaded && (tvShowsListLength === undefined || searchValue)) {
            dispatch(fetchTvShows({ urlParam: { q: searchValue } }));
        }
    }, [dispatch, lastUpdatedLoaded, tvShowsListLength, searchValue]);

    if (lastUpdatedError) return null;

    return (
        <>
            <Container>
                {tvShowsLoading === "pending" && (
                    <section className={styles.container}>
                        <Loading text="Loading shows" delay={5} />
                    </section>
                )}

                {!!tvShowsError?.length && (
                    <section className={styles.container}>
                        <Notification
                            variant="error"
                            state={tvShowsError ? "visible" : "hidden"}
                            iconSize="normal"
                            icon={undefined}
                            iconPosition="center"
                            showCloseButton={false}
                            customOnClickHandlerCloseButton={undefined}
                        >
                            {tvShowsError || ""}
                        </Notification>
                    </section>
                )}

                {tvShowsLoading === "fulfilled" && !tvShowsError?.length && (
                    <section className={styles.container} variant="overview">
                        {!!tvShowsPageItems?.length &&
                            tvShowsPageItems.map((tvShow) => {
                                const { id, title, imageUrl, showUrl } = tvShow;
                                const image = imageUrl || noImage;
                                return (
                                    <article key={id} className={styles.unit}>
                                        <NavigationLink className={styles.link} to={showUrl} end>
                                            <figure className={styles.imageContainer}>
                                                <img
                                                    className={styles.image}
                                                    src={image}
                                                    alt={title}
                                                    title={title}
                                                    crossOrigin="anonymous"
                                                />
                                            </figure>
                                            <h2 className={styles.title}>{title}</h2>
                                        </NavigationLink>
                                    </article>
                                );
                            })}
                    </section>
                )}
            </Container>

            {tvShowsLoading === "fulfilled" && !!tvShowsList.length && (
                <section className={styles.container} variant="pagination" style={{ bottom: height }}>
                    <Pagination
                        getPageContent={getPageContent}
                        data={tvShowsList}
                        itemsPerPage={8}
                        prefixSearchParam={undefined}
                        scrollToTop
                    />
                </section>
            )}
        </>
    );
}

export default TvShowsList;
