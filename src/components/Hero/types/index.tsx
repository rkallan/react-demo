import { ReactNode } from "react";

interface InterfaceHeroProps {
    fullWidth?: boolean;
    variant?: "default" | "black" | "red" | "white" | string;
    textColor?: "default" | "black" | "red" | "white" | string;
    hero: TypeHeroObject;
}

interface InterfaceHeroPropsForPageHeader {
    fullWidth?: boolean;
    variant?: "default" | "black" | "red" | "white" | string;
    textColor?: "default" | "black" | "red" | "white" | string;
}

type TypeHeroObject = {
    title: ReactNode;
    image: string;
};

export type { InterfaceHeroProps, InterfaceHeroPropsForPageHeader, TypeHeroObject };
