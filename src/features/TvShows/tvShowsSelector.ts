import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Store/types";
import type { InterfaceTvShowsState } from "./types";

const tvShowsState = ({ tvShows }: RootState): InterfaceTvShowsState => tvShows;
const getTvShowsList = createSelector(tvShowsState, (tvShows) => {
    const getSearchResult = !!tvShows.search.value;
    const stateShowKey = getSearchResult ? "search" : "overview";

    return tvShows[stateShowKey].entities || [];
});

const getTvShowsLoading = createSelector(tvShowsState, (tvShows) => {
    const isLoadingSearchResult = !!tvShows.search.value;
    const stateShowKey = isLoadingSearchResult ? "search" : "overview";

    return tvShows[stateShowKey].loading;
});
const getTvShowsError = createSelector(tvShowsState, (tvShows) => {
    const isLoadingSearchResult = !!tvShows.search.value;
    const stateShowKey = isLoadingSearchResult ? "search" : "overview";
    return tvShows[stateShowKey].error;
});

const getTvShowsSearchValue = createSelector(tvShowsState, (tvShows) => tvShows.search.value);

const selectTvShowById = createSelector([tvShowsState, (_, data) => data], (shows, data) => {
    const { entities } = shows.items || {};
    const { id } = data || {};
    const showById = entities?.[id] || undefined;

    return showById;
});

const selectTvShowError = createSelector(tvShowsState, ({ items }) => items.error);
const selectTvShowLoading = createSelector(tvShowsState, ({ items }) => items.loading);

const selectLastUpdatedOnServerByShowId = createSelector([tvShowsState, (_, data) => data], (shows, data) => {
    const { entities } = shows.lastUpdated || {};
    const { id } = data || {};
    const lastUpdated = entities?.[id] || undefined;

    return lastUpdated;
});

const getLastUpdatedLoaded = createSelector(tvShowsState, ({ lastUpdated }) => lastUpdated.loaded);
const getLastUpdatedLoading = createSelector(tvShowsState, ({ lastUpdated }) => lastUpdated.loading);
const getLastUpdatedError = createSelector(tvShowsState, ({ lastUpdated }) => lastUpdated.error);
const getLastFetchedTime = createSelector(tvShowsState, ({ lastUpdated }) => lastUpdated.lastFetchedTime);

export {
    tvShowsState,
    getTvShowsList,
    getTvShowsLoading,
    getTvShowsError,
    getTvShowsSearchValue,
    getLastUpdatedLoaded,
    getLastUpdatedLoading,
    getLastUpdatedError,
    getLastFetchedTime,
    selectTvShowById,
    selectTvShowError,
    selectTvShowLoading,
    selectLastUpdatedOnServerByShowId,
};
