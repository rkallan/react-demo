import type { TypeLoading, TypeCurrentRequestId, TypeError } from "Store/types";

interface InterfaceClientsState {
    quotes: TypeItemsQuotes;
    assignments: TypeItemsAssignments;
}

interface InterfaceAssignments {
    id?: number;
    name?: string;
    title?: string | undefined;
    content?: string[] | undefined;
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

type TypeItemsAssignments = {
    entities: InterfaceAssignments[] | undefined;
    ids: TypeItemIdsAssignments | undefined;
    loading: TypeLoading;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
    filter?: TypeFetchClientsDataProp;
};

type TypeItemsQuotes = {
    entities: InterfaceQuotes[] | undefined;
    ids: TypeItemIdsQuotes | undefined;
    loading: TypeLoading;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
};

type TypeItemIdsAssignments = {
    [key: number]: InterfaceAssignments;
};

type TypeItemIdsQuotes = {
    [key: number]: InterfaceQuotes;
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
    TypeItemsAssignments,
    TypeItemsQuotes,
    TypeFetchClientsDataProp,
    InterfaceAssignments,
    TypeRowLayout,
    TypeEntitiesSelector,
    TypeItemIdsAssignments,
    TypeItemIdsQuotes,
    InterfaceQuotes,
    TypePerson,
};
