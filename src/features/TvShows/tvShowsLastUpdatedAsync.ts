import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall, roundUp, objectAsUrlParams } from "@rrkallan/js-helpers";
import type { RootState } from "Store/types";
import type { TypeFetchTvShowsLastUpdatedDataProp } from "./types";

const fetchTvShowsLastUpdated = createAsyncThunk(
    "tvShows/fetchTvShowsLastUpdated",
    async (data: TypeFetchTvShowsLastUpdatedDataProp, { rejectWithValue, getState, requestId }) => {
        const { tvShows }: RootState = getState();
        const { lastUpdated } = tvShows;
        const { loading, currentRequestId, entities } = lastUpdated;
        const currentTime = new Date().toJSON();
        const list = entities || {};

        if (loading === false || requestId !== currentRequestId) return rejectWithValue({ error: { message: "Rejected" } });

        const { urlParam } = data;
        const urlParams = objectAsUrlParams(urlParam);
        const url = `${process.env.REACT_APP_API_SHOWS_UPDATES}${urlParams}`;

        const response = await apiCall({
            url,
            method: "GET",
        });

        const contentType = response.headers.get("content-type").split(";")[0];
        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: { message: "Rejected" } });

        const result = await response.json();
        const lastUpdatedEntities = { ...list, ...result };
        const totalShows = Object.keys(lastUpdatedEntities).length;
        const lastShowId = Object.keys(lastUpdatedEntities)
            .sort((first, second) => Number(first) - Number(second))
            .pop();
        const apiPages = roundUp(Number(lastShowId) / 250);

        return { lastUpdatedEntities, totalShows, apiPages, lastFetchedTime: currentTime };
    }
);

export default fetchTvShowsLastUpdated;
