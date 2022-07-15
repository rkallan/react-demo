import { ReactNode } from "react";

interface InterfaceContainer {
    children?: ReactNode;
    variant?: string | undefined;
    textColor?: string | undefined;
    fullWidth?: boolean;
    containerElementTag?: TypeElementTag;
    classNameContainer?: string | undefined;
    noUnitElement?: boolean;
    unitElementTag?: TypeElementTag;
    classNameUnit?: string | undefined;
}

type TypeElementTag = keyof JSX.IntrinsicElements;

export type { InterfaceContainer, TypeElementTag };
