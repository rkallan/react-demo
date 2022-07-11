import { useState } from "react";
import { InterfaceContainer, TypeElementTag } from "./types";
import styles from "./resources/styles/container.module.scss";

function Container({
    children,
    variant = "white",
    textColor = "default",
    className,
    containerElementTag = "section",
    unitElementTag = "section",
}: InterfaceContainer): JSX.Element {
    const [containerVariant] = useState(() => `${variant} ${textColor !== "default" ? `text-color-${textColor}` : ""}`.trim());
    const [containerClassName] = useState(() => [styles.container, className].join(" "));
    const [ContainerElementTag] = useState((): TypeElementTag => containerElementTag);
    const [UnitElementTag] = useState((): TypeElementTag => containerElementTag);

    return (
        <ContainerElementTag className={containerClassName} variant={containerVariant}>
            <UnitElementTag className={styles.unit}>{children}</UnitElementTag>
        </ContainerElementTag>
    );
}

export default Container;
