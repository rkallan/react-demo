import { config } from "@react-spring/web";

const pageAnimation = {
    from: {
        position: "absolute",
        left: "-100%",
        top: 0,
        opacity: 0,
        zIndex: 4,
    },
    enter: {
        position: "relative",
        top: 0,
        left: "0%",
        opacity: 1,
        zIndex: 4,
    },
    leave: {
        position: "relative",
        top: 0,
        left: "100%",
        opacity: 0,
        zIndex: 4,
    },
    exitBeforeEnter: true,
    onStart: (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },
    config: config.default,
};

export default pageAnimation;
