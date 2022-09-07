import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import InterfacePageHeader from "./types";
import styles from "./resources/styles/pageHeader.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

function PageHeader({ children, fullWidth = true, textColor = "red", variant = "white" }: InterfacePageHeader): JSX.Element {
    return (
        <Container classNameContainer={styles.container} variant={variant} textColor={textColor} fullWidth={fullWidth}>
            {children}
        </Container>
    );
}

export default PageHeader;
