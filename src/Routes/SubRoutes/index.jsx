import { useEffect } from "react";
import { Outlet, useLocation, useOutlet, useNavigate } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { pageAnimation } from "Routes/configuration";
import { validations } from "@rrkallan/js-helpers";
import styles from "./resources/styles/subRoutes.module.scss";

function SubRoutes() {
    const { pathname, ...location } = useLocation();
    const { referer } = location.state || {};
    const element = useOutlet();
    const navigate = useNavigate();
    const transition = useTransition(pathname, pageAnimation);

    useEffect(() => {
        const { redirect } = element.props.children.props.value.matches.reverse()[0].route || {};

        if (redirect) {
            const pathAsArray = pathname.split("/").filter((item) => validations.isNotEmpty(item, true));
            const isNotPathError = !pathAsArray.includes("error");
            const href = isNotPathError ? window.location.href : referer.href;
            const state = {
                referer: {
                    href,
                },
            };

            navigate(redirect, { replace: true, state });
        }
    }, [navigate, element, pathname, referer]);

    return transition((style) => {
        return (
            <animated.section className={styles.container} style={style}>
                <Outlet />
            </animated.section>
        );
    });
}

export default SubRoutes;
