import { ReactNode } from "react";

interface InterfaceContainer {
    children?: ReactNode;
    classNameContainer?: string | undefined;
    classNameUnit?: string | undefined;
    variant?: string | undefined;
    textColor?: string | undefined;
    containerElementTag?: TypeElementTag;
    unitElementTag?: TypeElementTag;
    fullWidth?: boolean;
}

type TypeElementTag = keyof JSX.IntrinsicElements;

export type { InterfaceContainer, TypeElementTag };
