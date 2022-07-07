import PropTypes from "prop-types";
import { getType } from "@rrkallan/js-helpers";
import icons from "./icons";
import styles from "./resources/styles/icons.module.scss";

function Icons({ icon, svgProps, noContainer, variant }) {
    const svgIcon = getType(icons[icon]) === "function" ? icons[icon](svgProps) : icons.fallback(svgProps);

    if (!svgIcon) return null;

    if (noContainer) return svgIcon;

    return (
        <div className={styles.container} variant={variant}>
            {svgIcon}
        </div>
    );
}

Icons.defaultProps = {
    variant: "normal",
    noContainer: false,
    svgProps: undefined,
};

Icons.propTypes = {
    icon: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["smallest", "small", "normal", "large", "largest", "full-width"]),
    noContainer: PropTypes.bool,
    svgProps: PropTypes.shape({}),
};

export default Icons;
