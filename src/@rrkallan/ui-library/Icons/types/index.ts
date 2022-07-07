interface InterfaceIcons {
    icon: string;
    svgProps?: {
        [key: string]: null | { [key: string]: string | number | Array<string | number> };
    };
    noContainer: boolean;
    variant?: "smallest" | "small" | "normal" | "large" | "largest" | "full-width";
}

export default InterfaceIcons;
