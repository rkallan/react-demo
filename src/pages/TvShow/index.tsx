/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { fetchTvShow } from "features/TvShows/tvShowsSlice";
import {
    getLastUpdatedLoaded,
    getLastFetchedTime,
    getLastUpdatedError,
    selectTvShowById,
    selectLastUpdatedOnServerByShowId,
} from "features/TvShows/tvShowsSelector";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/tvShow.module.scss";
import noImage from "./resources/images/no-image.png";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

function TvShow(): JSX.Element {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [idAsNumber] = useState(() => Number(id));
    const tvShow = useAppSelector((state) => selectTvShowById(state, { id: idAsNumber }));
    const tvShowLastUpdatedOmServer = useAppSelector((state) => selectLastUpdatedOnServerByShowId(state, { id: idAsNumber }));

    useEffect(() => {
        const updateTvShow = tvShowLastUpdatedOmServer !== tvShow?.updated;

        if (!tvShow || updateTvShow) dispatch(fetchTvShow({ showId: id }));
    }, [dispatch, id, tvShow, tvShowLastUpdatedOmServer]);

    return (
        <>
            <PageHeader>
                <div className={styles.container}>
                    <h1 className={styles.unit} variant="title">
                        {tvShow?.title}
                    </h1>
                </div>
            </PageHeader>
            <Container>
                {!!tvShow && (
                    <article>
                        <figure>
                            <img className={styles.image} src={tvShow.imageUrl} alt={tvShow.title} title={tvShow.title} />
                        </figure>
                        <p>{tvShow.summary}</p>
                    </article>
                )}
            </Container>
        </>
    );
}

export default TvShow;
