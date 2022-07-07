import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { getType } from "@rrkallan/js-helpers";
import styles from "./resources/styles/notification.module.scss";

const Icons = loadable(() => import(/* webpackChunkName: "Icons" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

function Notification({ children, variant, state, iconSize, icon, iconPosition, showCloseButton, customOnClickHandlerCloseButton }) {
    const onClickHandlerCloseButton = () => {
        if (getType(customOnClickHandlerCloseButton) === "function") customOnClickHandlerCloseButton();
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.container} variant={variant} state={state}>
                <div className={styles.unit} variant={`icon ${iconPosition}`}>
                    <Icons icon={icon} variant={iconSize} />
                </div>
                <div className={styles.unit} variant="content">
                    {children}
                </div>
            </div>
            {showCloseButton && (
                <div className={styles.closeButtonContainer}>
                    <button className={styles.button} type="button" onClick={onClickHandlerCloseButton}>
                        <Icons icon="close" variant="full-width" />
                        <span className={styles.text}>close notification</span>
                    </button>
                </div>
            )}
        </section>
    );
}

Notification.defaultProps = {
    variant: "default",
    state: "hidden",
    icon: "alert",
    iconSize: "normal",
    iconPosition: "top",
    showCloseButton: false,
    customOnClickHandlerCloseButton: undefined,
};

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["default", "confirm", "error", "warning"]),
    state: PropTypes.oneOf(["hidden", "visible"]),
    icon: PropTypes.string,
    iconSize: PropTypes.oneOf(["small", "normal", "large"]),
    iconPosition: PropTypes.oneOf(["top", "center"]),
    showCloseButton: PropTypes.bool,
    customOnClickHandlerCloseButton: PropTypes.func,
};

export default Notification;
