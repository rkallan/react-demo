import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import { apiCall, objectAsUrlParams } from "@rrkallan/js-helpers";
import type { TypeFetchTvShowsDataProp, TypeEntitiesList } from "./types";

const fetchTvShows = createAsyncThunk(
    "shows/fetchTvShows",
    async ({ urlParam }: TypeFetchTvShowsDataProp, { rejectWithValue, getState, requestId }) => {
        const isSearchFetch = !!urlParam.q;
        const stateShowKey = isSearchFetch ? "search" : "overview";
        const { tvShows }: RootState = getState();
        const { loading, currentRequestId } = tvShows[stateShowKey];
        const urlParams = objectAsUrlParams(urlParam);
        const envKeyForShows = isSearchFetch ? "REACT_APP_API_SHOWS_SEARCH" : "REACT_APP_API_SHOWS";
        const url = `${process.env[envKeyForShows]}${urlParams}`;

        if (!isSearchFetch && (loading === false || requestId !== currentRequestId)) return undefined;

        const response = await apiCall({
            url,
            method: "GET",
        });
        const contentType = response.headers.get("content-type").split(";")[0];
        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: "Rejected" });

        const jsonResult = await response.json();

        const result = jsonResult.reduce((data: TypeEntitiesList[], currentItem: TypeEntitiesList) => {
            const tempData = data;
            const item = currentItem.show || currentItem;
            const { id, name, rating, image, updated } = item;
            const nameForUrl = name?.trim().replace(/\s+/g, "-").toLowerCase();
            const showUrl = `/tv-show/${id}/${nameForUrl}`;
            const newItem = {
                id,
                title: name,
                avarageRating: rating?.avarage || undefined,
                imageUrl: image?.medium || image?.original || undefined,
                showUrl,
                updated,
            };

            tempData.push(newItem);

            return tempData;
        }, []);

        if (isSearchFetch) return result;

        const overviewEntities = tvShows.overview.entities || [];
        const overviewResult = [...overviewEntities, ...result];

        return overviewResult;
    }
);

export default fetchTvShows;
