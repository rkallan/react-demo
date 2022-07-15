import { ReactNode } from "react";

interface InterfaceHeroProps {
    fullWidth?: boolean;
    variant?: "default" | "black" | "red" | "white" | string;
    textColor?: "default" | "black" | "red" | "white" | string;
    hero: TypeHeroObject;
    children?: ReactNode;
}

type TypeHeroObject = {
    title: ReactNode;
    image?: string | undefined;
};

export type { InterfaceHeroProps, TypeHeroObject };
