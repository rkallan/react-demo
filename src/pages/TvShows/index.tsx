import { useEffect } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { fetchTvShowsLastUpdated } from "features/TvShows/tvShowsSlice";
import { getLastUpdatedLoaded, getLastFetchedTime, getLastUpdatedError } from "features/TvShows/tvShowsSelector";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { getDayDifference } from "@rrkallan/js-helpers";
import styles from "./resources/styles/tvShows.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Notification = loadable(() => import(/* webpackChunkName: "Notification" */ "@rrkallan/ui-library/Notification"), {
    fallback: <Loading />,
});

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

const SearchFornm = loadable(() => import(/* webpackChunkName: "SearchFornm" */ "./SearchForm"), {
    fallback: <Loading />,
});

const TvShowsList = loadable(() => import(/* webpackChunkName: "TvShowsList" */ "./TvShowsList"), {
    fallback: <Loading />,
});

function TvShows(): JSX.Element {
    const dispatch = useAppDispatch();
    const lastUpdatedLoaded = useAppSelector(getLastUpdatedLoaded);
    const lastFetchedTime = useAppSelector(getLastFetchedTime);
    const error = useAppSelector(getLastUpdatedError);

    useEffect(() => {
        const dayDifference = getDayDifference(lastFetchedTime) ?? -1;

        if (!lastUpdatedLoaded || dayDifference || error) {
            const urlParam = {
                since:
                    (dayDifference > 6 && "week") ||
                    (dayDifference === 1 && "day") ||
                    (dayDifference > 29 && undefined) ||
                    (!dayDifference && undefined) ||
                    undefined,
            };

            dispatch(fetchTvShowsLastUpdated({ urlParam }));
        }
    }, [dispatch, error, lastFetchedTime, lastUpdatedLoaded]);

    return (
        <>
            <PageHeader>
                <div className={styles.container}>
                    <h1 className={styles.unit} variant="title">
                        Tv Shows
                    </h1>
                    <article className={styles.unit} variant="search">
                        <SearchFornm />
                    </article>
                </div>
            </PageHeader>
            {!!error && (
                <Container>
                    <Notification
                        variant="error"
                        state="visible"
                        iconSize="normal"
                        icon={undefined}
                        iconPosition="center"
                        showCloseButton={false}
                        customOnClickHandlerCloseButton={undefined}
                    >
                        {error}
                    </Notification>
                </Container>
            )}
            <TvShowsList />
        </>
    );
}

export default TvShows;
