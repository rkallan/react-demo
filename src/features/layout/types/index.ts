type TypeElementClientRect = {
    [key: string]: number;
};

interface InterfaceLayoutState {
    [key: string]: TypeElementClientRect | undefined;
}

export type { InterfaceLayoutState, TypeElementClientRect };
