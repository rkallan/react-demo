import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { useLocation } from "react-router-dom";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/navigationBackLink.module.scss";

const Icon = loadable(() => import(/* webpackChunkName: "Icons" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

const NavigationLink = loadable(() => import(/* webpackChunkName: "NavigationLink" */ "@rrkallan/ui-library/NavigationLink"), {
    fallback: <Loading />,
});

function NavigationBackLink(): JSX.Element {
    const location = useLocation();
    const [iconProperties] = useState(() => {
        const properties = {
            variant: "scroll-to-top",
        };
        return properties;
    });
    const [backUrl, setBackUrl] = useState(() => "/");

    useEffect(() => {
        const { referer }: any = location?.state || {};
        const prevUrl = `${referer.pathname}${referer.search}${referer.hash}` || location.pathname.split("/")[1] || "/";
        setBackUrl(() => prevUrl);
    }, [location]);

    return (
        <div className={styles.container}>
            <NavigationLink className={styles.unit} to={backUrl}>
                <Icon icon="arrowLeft" variant="small" svgProps={iconProperties} noContainer={undefined} />
                <span className={styles.text} state="hidden">
                    Go to previoua page
                </span>
            </NavigationLink>
        </div>
    );
}

export default NavigationBackLink;
