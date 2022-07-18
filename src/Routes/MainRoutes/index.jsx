import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
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
        setTimeout(() => {
            setCurrentElement(() => element);
        }, 300);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    if (element.props.value.matches[0].route.redirect) <RedirectRoute redirect={currentElement.props.value.matches[0].route.redirect} />;

    return transition((style, item) => {
        const animationStyle =
            item.pathname.split("/")[1] !== location.pathname.split("/")[1] || item.pathname === location.pathname ? style : null;

        return (
            <animated.div className={styles.container} style={animationStyle}>
                {currentElement}
            </animated.div>
        );
    });
}

export default MainRoutes;
