import { Suspense } from "react";
import loadable from "@loadable/component";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistor } from "Store";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/template.module.scss";

const MainRoutes = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "Routes"), {
    fallback: <Loading />,
});

const Header = loadable(() => import(/* webpackChunkName: "Header" */ "components/Header"), {
    fallback: <Loading />,
});

const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ "components/Footer"), {
    fallback: <Loading />,
});

const ScrollToTop = loadable(() => import(/* webpackChunkName: "ScrollToTop" */ "@rrkallan/ui-library/ScrollToTop"), {
    fallback: <Loading />,
});

function Template(): JSX.Element {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <PersistGate loading={<Loading text="Webapplication is Loading" />} persistor={persistor}>
                    <Suspense fallback={<Loading />}>
                        <MainRoutes />
                    </Suspense>
                </PersistGate>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Template;
