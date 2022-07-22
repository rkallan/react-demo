/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TypeLoading, TypeCurrentRequestId, TypeError } from "Store/types";

interface InterfaceTvShowsState {
    overview: TypeOverview;
    search: TypeSearch;
    items: TypeItems;
    lastUpdated: TypeLastUpdated;
    totalShows: number | undefined;
    apiPages: number | undefined;
}

type TypeItems = {
    entities: ItemEntities | undefined;
    loading: TypeLoading;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
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
    loading: TypeLoading;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
};

type TypeSearch = {
    entities: TypeEntitiesList[] | undefined;
    loading: TypeLoading;
    value: string | undefined;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
};

type TypeLastUpdated = {
    entities: TypeLastUpdatedEntities | undefined;
    lastFetchedTime: string | undefined;
    loading: TypeLoading;
    currentRequestId: TypeCurrentRequestId;
    error: TypeError;
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
