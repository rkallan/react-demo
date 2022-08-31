import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { Helmet } from "react-helmet-async";
import { validations } from "@rrkallan/js-helpers";
import RedirectRoute from "Routes/RedirectRoute";
import { pageAnimation, routeConfiguration } from "Routes/configuration";
import { getPageTitle } from "helpers";
import styles from "./resources/styles/mainRoutes.module.scss";

function MainRoutes(): JSX.Element {
    const location = useLocation();
    const element = useRoutes(routeConfiguration);
    const [currentElement, setCurrentElement] = useState(() => element);
    const { title, redirect } = element?.props.value.matches[0].route || {};
    const pageTitle = getPageTitle({ titles: [title] });
    const transition = useTransition(location, { key: location.key, ...pageAnimation, onRest: () => setCurrentElement(() => element) });

    if (redirect) return <RedirectRoute redirect={redirect} />;

    return transition((style, item) => {
        const itemPathnameAsArray = item.pathname.split("/").filter((value) => validations.isNotEmpty(value, true));
        const locationPathnameAsArray = location.pathname.split("/").filter((value) => validations.isNotEmpty(value, true));
        const animationStyle = itemPathnameAsArray[0] !== locationPathnameAsArray[0] || item.pathname === location.pathname ? style : {};

        return (
            <animated.div className={styles.container} style={animationStyle}>
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>
                {currentElement}
            </animated.div>
        );
    });
}

export default MainRoutes;
