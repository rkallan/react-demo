// import { useEffect } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
// import { Link } from "react-router-dom";
import styles from "./resources/styles/work.module.scss";
import headerImage from "./resources/images/header.png";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

const Contact = loadable(() => import(/* webpackChunkName: "Contact" */ "components/Contact"), {
    fallback: <Loading />,
});

const Client = loadable(() => import(/* webpackChunkName: "Client" */ "components/Client"), {
    fallback: <Loading />,
});

function Work(): JSX.Element {
    return (
        <>
            <PageHeader variant="black" textColor="white" fullWidth>
                <div className={styles.container}>
                    <h1 className={styles.unit} variant="title">
                        A selection of projects that <b>pioneer</b> <b>tech</b> and <b>marketing</b> to help brands stay ahead.
                    </h1>
                    <div className={styles.unit} variant="image">
                        <figure className={styles.imageContainer}>
                            <img className={styles.image} src={headerImage} alt="Header image for page Work" aria-hidden />
                        </figure>
                    </div>
                </div>
            </PageHeader>

            <Container>Blog items</Container>

            <Client />

            <Contact />
        </>
    );
}

export default Work;
