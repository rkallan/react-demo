import { createSlice } from "@reduxjs/toolkit";
import fetchTvShows from "./tvShowsAsync";
import fetchTvShow from "./tvShowAsync";
import fetchTvShowsLastUpdated from "./tvShowsLastUpdatedAsync";
import type { InterfaceTvShowsState } from "./types";

const initialState: InterfaceTvShowsState = {
    totalShows: undefined,
    apiPages: undefined,
    items: {
        entities: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
    },
    overview: {
        entities: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
    },
    search: {
        entities: undefined,
        value: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
    },
    lastUpdated: {
        entities: undefined,
        lastFetchedTime: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
    },
};

const tvShows = createSlice({
    name: "tvShows",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            const tempState: InterfaceTvShowsState = state;
            const { searchValue } = action.payload;

            if (searchValue === undefined) {
                tempState.search = {
                    ...initialState.search,
                };
            }

            tempState.search.value = searchValue;
            tempState.search.error = undefined;

            return tempState;
        },
        resetTvShows: () => {
            const tempState: InterfaceTvShowsState = initialState;

            return tempState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShowsLastUpdated.pending, (state, { meta }) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestId, requestStatus } = meta || {};
                if (!state.lastUpdated.currentRequestId) {
                    tempState.lastUpdated.loading = requestStatus;
                    tempState.lastUpdated.currentRequestId = requestId;
                    tempState.lastUpdated.error = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShowsLastUpdated.fulfilled, (state, { meta, payload }) => {
                const tempState: InterfaceTvShowsState = state;
                const { lastUpdated } = state || {};
                const { requestId, requestStatus } = meta || {};
                const { lastUpdatedEntities, apiPages, totalShows, lastFetchedTime } = payload || {};

                if (lastUpdated.currentRequestId === requestId) {
                    tempState.lastUpdated.loading = requestStatus;
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
                const tempState: InterfaceTvShowsState = state;
                const { requestId, requestStatus } = action.meta;
                const { error } = (action.payload as { error: { message: string } }) || action || {};

                if (state.lastUpdated.currentRequestId === requestId) {
                    tempState.lastUpdated.loading = requestStatus;
                    tempState.lastUpdated.error = (!!error?.message && [error?.message]) || [];
                    tempState.lastUpdated.currentRequestId = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShows.pending, (state, { meta }) => {
                const { requestId } = meta;
                const tempState: InterfaceTvShowsState = state;
                const isSearchFetch = !!meta.arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                tempState[stateShowKey].currentRequestId = requestId;
                tempState[stateShowKey].loading = "pending";
                tempState[stateShowKey].error = undefined;

                return tempState;
            })
            .addCase(fetchTvShows.fulfilled, (state, action) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestId, arg } = action.meta;
                const isSearchFetch = !!arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                if (state[stateShowKey].currentRequestId === requestId) {
                    if (!tempState[stateShowKey].entities) tempState[stateShowKey].entities = [];

                    tempState[stateShowKey].loading = "fulfilled";
                    tempState[stateShowKey].entities?.push(...action.payload);
                    tempState[stateShowKey].currentRequestId = undefined;
                    tempState[stateShowKey].error = undefined;
                }

                if (isSearchFetch && action.payload.length === 0) {
                    tempState[stateShowKey].error = ["Sorry there are no results for your search value"];
                }

                return tempState;
            })
            .addCase(fetchTvShows.rejected, (state, action) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestId, arg, requestStatus } = action.meta;
                const { error } = (action.payload as { error: { message: string | undefined } }) || {};
                const isSearchFetch = !!arg.urlParam.q;
                const stateShowKey = isSearchFetch ? "search" : "overview";

                if (state[stateShowKey].currentRequestId === requestId) {
                    tempState[stateShowKey].loading = requestStatus;
                    tempState[stateShowKey].error = (!!error?.message && [error?.message]) || [];
                    tempState[stateShowKey].currentRequestId = undefined;
                }

                return tempState;
            })
            .addCase(fetchTvShow.pending, (state, { meta }) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestId, requestStatus } = meta || {};
                if (!state.items.currentRequestId) {
                    tempState.items.loading = requestStatus;
                    tempState.items.currentRequestId = requestId;
                }

                return tempState;
            })
            .addCase(fetchTvShow.fulfilled, (state, { meta, payload }) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestStatus } = meta || {};

                tempState.items.loading = requestStatus;
                tempState.items.entities = { ...payload };
                tempState.items.currentRequestId = undefined;
                tempState.items.error = undefined;

                return tempState;
            })
            .addCase(fetchTvShow.rejected, (state, action) => {
                const tempState: InterfaceTvShowsState = state;
                const { requestId, requestStatus } = action.meta;
                const { error } = (action.payload as { error: { message: string } }) || action || {};

                if (state.items.currentRequestId === requestId) {
                    tempState.items.loading = requestStatus;
                    tempState.items.error = (!!error?.message && [error?.message]) || [];
                    tempState.items.currentRequestId = undefined;
                }

                return tempState;
            });
    },
});

const { setSearchValue, resetTvShows } = tvShows.actions;
const tvShowsReducers = tvShows.reducer;

export { tvShowsReducers, setSearchValue, resetTvShows, fetchTvShows, fetchTvShow, fetchTvShowsLastUpdated };
