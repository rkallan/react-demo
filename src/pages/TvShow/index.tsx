import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { fetchTvShow } from "features/TvShows/tvShowsSlice";
import { selectTvShowById, selectLastUpdatedOnServerByShowId } from "features/TvShows/tvShowsSelector";
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
    const tvShowLastUpdatedOnServer = useAppSelector((state) => selectLastUpdatedOnServerByShowId(state, { id: idAsNumber }));

    useEffect(() => {
        const updateTvShow = (tvShowLastUpdatedOnServer || 0) > tvShow?.updated;

        if (!tvShow || updateTvShow) dispatch(fetchTvShow({ showId: id }));
    }, [dispatch, id, tvShow, tvShowLastUpdatedOnServer]);

    return (
        <>
            <PageHeader>
                <div className={styles.container} variant="title">
                    <h1 className={styles.unit} variant="title">
                        {tvShow?.title}
                    </h1>
                </div>
            </PageHeader>
            <Container>
                {!!tvShow && (
                    <article className={styles.container} variant="content">
                        <div className={styles.unit}>
                            <figure className={styles.imageContainer}>
                                <img className={styles.image} src={tvShow.imageUrl || noImage} alt={tvShow.title} title={tvShow.title} />
                                <figcaption>
                                    <ul>
                                        <li>
                                            <span>premiere: {tvShow.premiered}</span>
                                        </li>
                                        <li>
                                            <span>ended: {tvShow.ended}</span>
                                        </li>
                                    </ul>
                                    <div>
                                        {tvShow?.genres?.map((genre: string, key: number) => {
                                            const genreKey = key;
                                            return <div key={genreKey}>{genre}</div>;
                                        })}
                                    </div>
                                </figcaption>
                            </figure>
                            <span className={styles.text}>{tvShow.summary}</span>
                        </div>
                    </article>
                )}
            </Container>
        </>
    );
}

export default TvShow;
