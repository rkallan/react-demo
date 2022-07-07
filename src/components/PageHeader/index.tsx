import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import InterfacePageHeader from "./types";
import styles from "./resources/styles/pageHeader.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

function PageHeader({ children }: InterfacePageHeader): JSX.Element {
    return (
        <div className={styles.container}>
            <Container textColor="red">{children}</Container>
        </div>
    );
}

export default PageHeader;
