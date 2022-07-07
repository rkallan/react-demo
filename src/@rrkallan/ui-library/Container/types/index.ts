import { ReactNode } from "react";

interface InterfaceContainer {
    children: ReactNode;
    variant?: "default" | "black" | "red" | "white";
    textColor?: "default" | "black" | "red" | "white";
}

export default InterfaceContainer;
