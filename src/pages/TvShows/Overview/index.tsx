import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import content from "./resources/data/content";
import styles from "./resources/styles/tvShowsOverview.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "components/Hero"), {
    fallback: <Loading />,
});

const TvShowsList = loadable(() => import(/* webpackChunkName: "Hero" */ "features/TvShows/TvShowsList"), {
    fallback: <Loading />,
});

const TvShowsSearchForm = loadable(() => import(/* webpackChunkName: "TvShowsSearchForm" */ "features/TvShows/TvShowsSearchForm"), {
    fallback: <Loading />,
});

function TvShowsOverview(): JSX.Element {
    const { pageHeader } = content;
    const { hero } = pageHeader;

    return (
        <>
            <PageHeader>
                <Hero {...hero} />
                <Container variant="white" textColor="red" classNameContainer={styles.container}>
                    <section className={styles.unit} variant="search">
                        <TvShowsSearchForm />
                    </section>
                </Container>
            </PageHeader>
            <TvShowsList />
        </>
    );
}

export default TvShowsOverview;
