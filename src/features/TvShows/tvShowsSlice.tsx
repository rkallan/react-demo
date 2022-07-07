import { createSlice } from "@reduxjs/toolkit";
import fetchTvShows from "./tvShowsAsync";
import fetchTvShow from "./tvShowAsync";
import fetchTvShowsLastUpdated from "./tvShowsLastUpdatedAsync";
import type { InterfaceTvShowsState } from "./types";

const initialState: InterfaceTvShowsState = {
    entities: undefined,
    totalShows: undefined,
    apiPages: undefined,
    loading: false,
    currentRequestId: undefined,
    error: undefined,
    items: {
        entities: undefined,
        loading: false,
        currentRequestId: undefined,
        error: undefined,
    },
    overview: {
        entities: undefined,
        loading: false,
        currentRequestId: undefined,
        error: undefined,
    },
    search: {
        entities: undefined,
        loading: false,
        value: undefined,
        currentRequestId: undefined,
        error: undefined,
    },
    lastUpdated: {
        entities: undefined,
        loading: false,
        loaded: false,
        lastFetchedTime: undefined,
        currentRequestId: undefined,
        error: undefined,
    },
    searchValue: undefined,
};

const tvShows = createSlice({
    name: "tvShows",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            const newState = state;
            const { searchValue } = action.payload;

            if (searchValue === undefined) {
                newState.search = {
                    ...initialState.search,
                };
            }

            newState.search.value = searchValue;

            return newState;
        },
        resetTvShows: () => {
            const newState = initialState;

            return newState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShows.pending, (state, action) => {
                const tempState = state;
                const isSearchFetch = !!action.meta.arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                if (!state[stateShowKey].loading) {
                    tempState[stateShowKey].loading = true;
                    tempState[stateShowKey].currentRequestId = action.meta.requestId;
                }

                return tempState;
            })
            .addCase(fetchTvShows.fulfilled, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const isSearchFetch = !!arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                if (state[stateShowKey].loading && state[stateShowKey].currentRequestId === requestId) {
                    if (!tempState[stateShowKey].entities) tempState[stateShowKey].entities = [];
                    tempState[stateShowKey].loading = false;
                    tempState[stateShowKey].entities = action.payload;
                    tempState[stateShowKey].currentRequestId = undefined;
                }

                if (isSearchFetch && !action.payload.length) {
                    tempState[stateShowKey].error = "Sorry there are no results for your search";
                }

                return tempState;
            })
            .addCase(fetchTvShows.rejected, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const { error } = action.payload as { error: string };
                const isSearchFetch = !!arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                if (state[stateShowKey].loading && state[stateShowKey].currentRequestId === requestId) {
                    tempState[stateShowKey].loading = false;
                    tempState[stateShowKey].error = error;
                    tempState[stateShowKey].currentRequestId = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShowsLastUpdated.pending, (state, action) => {
                const tempState = state;
                if (!state.lastUpdated.loading) {
                    tempState.lastUpdated.loading = true;
                    tempState.lastUpdated.loaded = false;
                    tempState.lastUpdated.currentRequestId = action.meta.requestId;
                }

                return tempState;
            })
            .addCase(fetchTvShowsLastUpdated.fulfilled, (state, { meta, payload }) => {
                const tempState = state;
                const { lastUpdated } = state || {};
                const { requestId } = meta || {};
                const { lastUpdatedEntities, apiPages, totalShows, lastFetchedTime } = payload || {};

                if (lastUpdated.loading && lastUpdated.currentRequestId === requestId) {
                    tempState.lastUpdated.loading = false;
                    tempState.lastUpdated.loaded = true;
                    tempState.lastUpdated.entities = lastUpdatedEntities;
                    tempState.lastUpdated.lastFetchedTime = lastFetchedTime;
                    tempState.lastUpdated.currentRequestId = undefined;
                    tempState.lastUpdated.error = undefined;
                    tempState.apiPages = apiPages;
                    tempState.totalShows = totalShows;
                }

                return tempState;
            })
            .addCase(fetchTvShowsLastUpdated.rejected, (state, action) => {
                const tempState = state;
                const { requestId } = action.meta;
                const { error } = (action.payload as { error: { message: string } }) || action;

                if (state.lastUpdated.loading && state.lastUpdated.currentRequestId === requestId) {
                    tempState.lastUpdated.loading = false;
                    tempState.lastUpdated.error = error.message;
                    tempState.lastUpdated.currentRequestId = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShow.pending, (state, action) => {
                const tempState = state;
                if (!state.items.loading) {
                    tempState.items.loading = true;
                    tempState.items.currentRequestId = action.meta.requestId;
                }

                return tempState;
            })
            .addCase(fetchTvShow.fulfilled, (state, { meta, payload }) => {
                const tempState = state;
                const { items } = state || {};
                const { requestId } = meta || {};

                if (items.loading && items.currentRequestId === requestId) {
                    tempState.items.loading = false;
                    tempState.items.entities = { ...payload };
                    tempState.items.currentRequestId = undefined;
                    tempState.items.error = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShow.rejected, (state, action) => {
                const tempState = state;
                const { requestId } = action.meta;
                const { error } = (action.payload as { error: { message: string } }) || action;

                if (state.items.loading && state.items.currentRequestId === requestId) {
                    tempState.items.loading = false;
                    tempState.items.error = error.message;
                    tempState.items.currentRequestId = undefined;
                }

                return tempState;
            });
    },
});

const { setSearchValue, resetTvShows } = tvShows.actions;
const tvShowsReducers = tvShows.reducer;

export { tvShowsReducers, setSearchValue, resetTvShows, fetchTvShows, fetchTvShow, fetchTvShowsLastUpdated };
