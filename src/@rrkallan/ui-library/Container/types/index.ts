import { ReactNode } from "react";

interface InterfaceContainer {
    children?: ReactNode;
    classNameContainer?: string | undefined;
    classNameUnit?: string | undefined;
    variant?: "default" | "black" | "red" | "white";
    textColor?: "default" | "black" | "red" | "white";
    containerElementTag?: TypeElementTag;
    unitElementTag?: TypeElementTag;
    fullWidth?: boolean;
}

type TypeElementTag = keyof JSX.IntrinsicElements;

export type { InterfaceContainer, TypeElementTag };
