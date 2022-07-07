import { useState } from "react";
import InterfaceContainer from "./types";
import styles from "./resources/styles/container.module.scss";

function Container({ children, variant = "white", textColor = "default" }: InterfaceContainer): JSX.Element {
    const [containerVariant] = useState(() => `${variant} ${textColor !== "default" ? `text-color-${textColor}` : ""}`.trim());

    return (
        <div className={styles.container} variant={containerVariant}>
            <article className={styles.unit}>{children}</article>
        </div>
    );
}

export default Container;
