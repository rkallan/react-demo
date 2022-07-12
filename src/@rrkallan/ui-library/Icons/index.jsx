import PropTypes from "prop-types";
import icons from "./icons";
import styles from "./resources/styles/icons.module.scss";

function Icons({ icon, svgProps, noContainer, variant }) {
    const SvgIcon = icons[icon] || icon.fallback;

    if (!SvgIcon) return null;

    if (noContainer) return <SvgIcon {...svgProps} />;

    return (
        <div className={styles.container} variant={variant}>
            <SvgIcon {...svgProps} />
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
