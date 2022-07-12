import { useState } from "react";
import { InterfaceContainer, TypeElementTag } from "./types";
import styles from "./resources/styles/container.module.scss";

function Container({
    children,
    variant = "white",
    textColor = "default",
    classNameContainer,
    classNameUnit,
    containerElementTag = "section",
    unitElementTag = "section",
    fullWidth = false,
}: InterfaceContainer): JSX.Element {
    const [containerVariant] = useState(() =>
        `${variant} ${textColor !== "default" ? `text-color-${textColor}` : ""} ${fullWidth ? `full-width` : ""}`.trim()
    );
    const [containerClassName] = useState(() => [styles.container, classNameContainer].join(" "));
    const [unitClassName] = useState(() => [styles.unit, classNameUnit].join(" "));
    const [ContainerElementTag] = useState((): TypeElementTag => containerElementTag);
    const [UnitElementTag] = useState((): TypeElementTag => unitElementTag);

    return (
        <ContainerElementTag className={containerClassName} variant={containerVariant}>
            <UnitElementTag className={unitClassName}>{children}</UnitElementTag>
        </ContainerElementTag>
    );
}

export default Container;
