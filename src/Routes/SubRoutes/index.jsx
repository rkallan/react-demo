import { Outlet, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { pageAnimation } from "Routes/configuration";
import styles from "./resources/styles/subRoutes.module.scss";

const SubRoutes = () => {
    const location = useLocation();
    const transition = useTransition(location.pathname, pageAnimation);

    return transition((style) => {
        return (
            <animated.section className={styles.container} style={style}>
                <Outlet />
            </animated.section>
        );
    });
};

export default SubRoutes;
