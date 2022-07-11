import { ReactNode } from "react";

interface InterfaceContainer {
    children?: ReactNode;
    className?: string | undefined;
    variant?: "default" | "black" | "red" | "white";
    textColor?: "default" | "black" | "red" | "white";
    containerElementTag?: TypeElementTag;
    unitElementTag?: TypeElementTag;
}

type TypeElementTag = keyof JSX.IntrinsicElements;

export type { InterfaceContainer, TypeElementTag };
