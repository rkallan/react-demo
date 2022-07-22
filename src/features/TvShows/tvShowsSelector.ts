import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Store/types";
import type { InterfaceTvShowsState } from "./types";

const getTvShowsState = ({ tvShows }: RootState): InterfaceTvShowsState => tvShows;

const getTvShowsList = createSelector(getTvShowsState, (tvShows) => {
    const stateShowKey = tvShows.search?.value ? "search" : "overview";

    return tvShows[stateShowKey].entities || [];
});

const getTvShowsListLength = createSelector(getTvShowsState, (tvShows) => {
    const stateShowKey = tvShows.search?.value ? "search" : "overview";

    if (tvShows[stateShowKey].entities?.length === 0 || tvShows[stateShowKey].entities?.length) return true;

    return undefined;
});

const getTvShowsLoading = createSelector(getTvShowsState, (tvShows) => {
    const isLoadingSearchResult = !!tvShows.search.value;
    const stateShowKey = isLoadingSearchResult ? "search" : "overview";

    return tvShows[stateShowKey].loading;
});
const getTvShowsError = createSelector(getTvShowsState, (tvShows) => {
    const stateShowKey = tvShows.search.value ? "search" : "overview";

    return tvShows[stateShowKey].error;
});

const getTvShowsSearchValue = createSelector(getTvShowsState, (tvShows) => tvShows.search.value);

const selectTvShowById = createSelector([getTvShowsState, (_, data) => data], (shows, data) => {
    const { entities } = shows.items || {};
    const { id } = data || {};
    const showById = entities?.[id] || undefined;

    return showById;
});

const selectTvShowError = createSelector(getTvShowsState, ({ items }) => items.error);
const selectTvShowLoading = createSelector(getTvShowsState, ({ items }) => items.loading);

const selectLastUpdatedOnServerByShowId = createSelector([getTvShowsState, (_, data) => data], (shows, data) => {
    const { entities } = shows.lastUpdated || {};
    const { id } = data || {};
    const lastUpdated = entities?.[id] || undefined;

    return lastUpdated;
});

const getIsLastUpdatedLoaded = createSelector(getTvShowsState, ({ lastUpdated }) => lastUpdated.loading === "fulfilled");
const getLastUpdatedLoading = createSelector(getTvShowsState, ({ lastUpdated }) => lastUpdated.loading);
const getLastUpdatedError = createSelector(getTvShowsState, ({ lastUpdated }) => lastUpdated.loading === "rejected" && lastUpdated.error);
const getLastFetchedTime = createSelector(getTvShowsState, ({ lastUpdated }) => lastUpdated.lastFetchedTime);

export {
    getTvShowsState,
    getTvShowsList,
    getTvShowsListLength,
    getTvShowsLoading,
    getTvShowsError,
    getTvShowsSearchValue,
    getIsLastUpdatedLoaded,
    getLastUpdatedLoading,
    getLastUpdatedError,
    getLastFetchedTime,
    selectTvShowById,
    selectTvShowError,
    selectTvShowLoading,
    selectLastUpdatedOnServerByShowId,
};
