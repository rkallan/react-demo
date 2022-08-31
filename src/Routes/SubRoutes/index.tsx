import { Outlet, useLocation, useOutlet } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { Helmet } from "react-helmet-async";
import { pageAnimation } from "Routes/configuration";
import RedirectRoute from "Routes/RedirectRoute";
import { getPageTitle } from "helpers";
import styles from "./resources/styles/subRoutes.module.scss";

function SubRoutes(): JSX.Element {
    const { pathname } = useLocation();
    const element = useOutlet();
    const transition = useTransition(pathname, pageAnimation);
    const matches = [...(element?.props.children.props.value.matches || {})];
    const { title, redirect } = matches.reverse()[0].route;
    const pageTitle = getPageTitle({ titles: [title] });

    if (redirect) return <RedirectRoute redirect={redirect} />;

    return transition((style, item) => {
        const animationStyle = item !== pathname ? style : {};

        return (
            <animated.div className={styles.container} style={animationStyle}>
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>
                <Outlet />
            </animated.div>
        );
    });
}

export default SubRoutes;
