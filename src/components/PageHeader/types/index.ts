import { ReactNode } from "react";

interface InterfacePageHeader {
    children: ReactNode;
    fullWidth?: boolean;
    variant?: "default" | "black" | "red" | "white";
    textColor?: "default" | "black" | "red" | "white";
}

export default InterfacePageHeader;
