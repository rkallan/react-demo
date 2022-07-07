/* eslint-disable @typescript-eslint/no-explicit-any */
interface InterfaceInputfieldText {
    id: number;
    title: string;
    name: string;
    defaultValue?: string | number;
    type?: "text" | "number" | "email" | "hidden" | "password" | "search" | "tel" | "url";
    readOnly?: boolean;
    disabled?: boolean;
    required?: boolean;
    validationTypes?: {
        [key: string]: null | { [key: string]: string | number | Array<string | number> };
    };
    errorMessage?: string;
    autoComplete?: string;
    max?: number | undefined;
    min?: number | undefined;
    step?: number | undefined;
    customOnChangeHandler?: (value: any) => typeof value | void;
    clearValue?: boolean;
}

type TypesElememtStateProps = {
    value: string | number;
};

type TypesGetValueProps = {
    value: string;
    valueAsNumber: number;
};

export default InterfaceInputfieldText;

export type { TypesElememtStateProps, TypesGetValueProps };
