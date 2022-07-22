import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { validations } from "@rrkallan/js-helpers";
import RedirectRoute from "Routes/RedirectRoute";
import { pageAnimation, routeConfiguration } from "Routes/configuration";
import styles from "./resources/styles/mainRoutes.module.scss";

function MainRoutes() {
    const location = useLocation();
    const { pathname } = location;
    const transition = useTransition(location, { key: location.key, ...pageAnimation });
    const element = useRoutes(routeConfiguration);
    const [currentElement, setCurrentElement] = useState(() => element);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentElement(() => element);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    if (element.props.value.matches[0].route.redirect)
        return <RedirectRoute redirect={currentElement.props.value.matches[0].route.redirect} />;

    return transition((style, item) => {
        const itemPathnameAsArray = item.pathname.split("/").filter((value) => validations.isNotEmpty(value, true));
        const locationPathnameAsArray = location.pathname.split("/").filter((value) => validations.isNotEmpty(value, true));
        const animationStyle = itemPathnameAsArray[0] !== locationPathnameAsArray[0] || item.pathname === location.pathname ? style : null;

        return (
            <animated.div className={styles.container} style={animationStyle}>
                {currentElement}
            </animated.div>
        );
    });
}

export default MainRoutes;
