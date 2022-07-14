interface InterfaceClientsState {
    quotes: TypeItems;
    assignments: TypeItems;
}

interface TypeAssignments {
    id?: number;
    name?: string;
    title?: string | undefined;
    text?: string | undefined;
    intro?: string | undefined;
    client?: string;
    clientId?: number;
    mainImage?: string | undefined;
    images?: string | undefined;
    date?: string | undefined;
    category?: string;
    categoryId?: number;
}

type TypeItems = {
    entities: TypeAssignments[] | undefined;
    ids: TypeItemIds | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type TypeItemIds = {
    [key: number]: {
        [key: string]: string;
    };
};

type TypeFetchClientsDataProp = {
    [key: string]: string | number;
};

type TypeRowLayout = {
    row: number;
    items: number;
    component?: string | undefined;
    deviding: string | undefined;
};

type TypeEntitiesSelector = {
    result: [
        {
            items: [];
            layout: TypeRowLayout;
        }
    ];
    startWith: number;
};

export type { InterfaceClientsState, TypeItems, TypeFetchClientsDataProp, TypeAssignments, TypeRowLayout, TypeEntitiesSelector };
