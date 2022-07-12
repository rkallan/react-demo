interface InterfaceClientLogo {
    icon: string;
    svgProps?: {
        [key: string]: null | { [key: string]: string | number | Array<string | number> };
    };
}

type TypeLogoProps = {
    [key: string]: string | number;
};

export type { InterfaceClientLogo, TypeLogoProps };
