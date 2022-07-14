interface InterfaceClientsState {
    quotes: TypeItems2;
    assignments: TypeItems;
}

interface InterfaceAssignments {
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
interface InterfaceQuotes {
    id: number;
    text: string;
    person: TypePerson;
}

type TypePerson = {
    personId: number;
    name: string;
    client: string;
    function?: string | undefined;
};

type TypeItems = {
    entities: InterfaceAssignments[] | undefined;
    ids: TypeItemIds | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | undefined;
    filter?: TypeFetchClientsDataProp;
};

type TypeItems2 = {
    entities: InterfaceQuotes[] | undefined;
    ids: TypeItemIds | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type TypeItemIds = {
    [key: number]: InterfaceAssignments | InterfaceQuotes;
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

export type {
    InterfaceClientsState,
    TypeItems,
    TypeFetchClientsDataProp,
    InterfaceAssignments,
    TypeRowLayout,
    TypeEntitiesSelector,
    TypeItemIds,
    InterfaceQuotes,
    TypePerson,
};
