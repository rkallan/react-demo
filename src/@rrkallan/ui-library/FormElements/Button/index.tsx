import { MouseEvent } from "react";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import InterfaceButton from "./types";
import styles from "./resources/styles/button.module.scss";

const Icon = loadable(() => import(/* webpackChunkName: "Icons" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

function Button({ children, type = "button", disabled = false }: InterfaceButton): JSX.Element {
    const onClickHandlerButton = (event: MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        const { currentTarget } = event || {};

        currentTarget.blur();
    };

    return (
        /* eslint-disable react/button-has-type */
        <button className={styles.container} type={type} disabled={disabled} onClick={onClickHandlerButton}>
            <div className={styles.unit} variant="loading">
                <Icon icon="check" variant="small" svgProps={undefined} noContainer={undefined} />
                <span>Loading</span>
            </div>
            <div className={styles.unit}>{children}</div>
        </button>
    );
}

export default Button;
