import { ReactNode } from "react";

interface InterfacePageHeader {
    children: ReactNode;
    fullWidth?: boolean;
    variant?: "default" | "black" | "red" | "white" | string;
    textColor?: "default" | "black" | "red" | "white" | string;
}

export default InterfacePageHeader;
