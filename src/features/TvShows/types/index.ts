/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
interface InterfaceTvShowsState {
    entities: [] | undefined;
    totalShows: number | undefined;
    apiPages: number | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | object | undefined;
    overview: TypeOverview;
    search: TypeSearch;
    items: TypeItems;
    lastUpdated: TypeLastUpdated;
    searchValue: string | undefined;
}

type TypeItems = {
    entities: ItemEntities | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type ItemEntities = {
    [key: number]: {
        [key: string]: any;
    };
};

type TypeEntitiesList = {
    id: number;
    title: string | undefined;
    avarageRating: number | undefined;
    imageUrl: string | undefined;
    updated: number;
    showUrl: string;
    name?: string;
    show?: TypeEntitiesList;
    rating?: {
        avarage: number | null;
    };
    image?: {
        [key: string]: string;
    } | null;
};

type TypeOverview = {
    entities: TypeEntitiesList[] | undefined;
    loading: boolean;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type TypeSearch = {
    entities: TypeEntitiesList[] | undefined;
    loading: boolean;
    value: string | undefined;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type TypeLastUpdated = {
    entities: TypeLastUpdatedEntities | undefined;
    loading: boolean;
    loaded: boolean;
    lastFetchedTime: string | undefined;
    currentRequestId: string | undefined;
    error: string | undefined;
};

type TypeLastUpdatedEntities = {
    [key: number]: number;
};

type TypeFetchTvShowsLastUpdatedDataProp = {
    urlParam: {
        since: string | undefined;
    };
};

type TypeFetchTvShowsDataProp = {
    urlParam: {
        [key: string]: string | number | undefined;
    };
};

type TypeFetchTvShowDataProp = {
    showId: number | string | undefined;
    urlParam?: {
        [key: string]: string | number | undefined;
    };
};

export type {
    InterfaceTvShowsState,
    TypeLastUpdated,
    TypeEntitiesList,
    TypeFetchTvShowsLastUpdatedDataProp,
    TypeFetchTvShowsDataProp,
    TypeFetchTvShowDataProp,
};
