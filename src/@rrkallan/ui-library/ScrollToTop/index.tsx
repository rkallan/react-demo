import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { useScrollPosition } from "@rrkallan/react-hooks";
import styles from "./resources/styles/scrollToTop.module.scss";

const Icon = loadable(() => import(/* webpackChunkName: "Icons" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

function ScrollToTop(): JSX.Element {
    const { scrollPositionY } = useScrollPosition();
    const [containerState, setContainerState] = useState(() => "hidden");
    const [showButtonScrollPosition] = useState(() => 480);
    const [iconProperties] = useState(() => {
        const properties = {
            variant: "scroll-to-top",
        };
        return properties;
    });

    const onClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (scrollPositionY > showButtonScrollPosition) setContainerState(() => "is-active");
        if (scrollPositionY <= showButtonScrollPosition) setContainerState(() => "hidden");
    }, [scrollPositionY, showButtonScrollPosition]);

    return (
        <div className={styles.container} state={containerState}>
            <button className={styles.unit} type="button" onClick={onClickHandler}>
                <Icon icon="arrowUp" variant="small" svgProps={iconProperties} noContainer={undefined} />
                <span className={styles.text} state="hidden">
                    Scroll to the top of the page
                </span>
            </button>
        </div>
    );
}

export default ScrollToTop;
