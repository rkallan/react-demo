import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import { apiCall, objectAsUrlParams, getStringAsUrlfriendly } from "@rrkallan/js-helpers";
import type { TypeFetchTvShowsDataProp, TypeEntitiesList } from "./types";

const fetchTvShows = createAsyncThunk(
    "shows/fetchTvShows",
    async ({ urlParam }: TypeFetchTvShowsDataProp, { rejectWithValue, getState, requestId, signal }) => {
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
            signal,
        });
        const contentType = response.headers.get("content-type").split(";")[0];

        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: "Rejected" });

        const jsonResult = await response.json();

        const result = jsonResult.reduce((data: TypeEntitiesList[], currentItem: TypeEntitiesList) => {
            const tempData = data;
            const item = currentItem.show || currentItem;
            const { id, name, rating, image, updated, genres, premiered, ended, status, language } = item;
            const nameForUrl = getStringAsUrlfriendly(name);
            const showUrl = `${id}/${nameForUrl}`;
            const genresAsLowerCase = genres?.map((genre) => genre.toLowerCase());
            const imageUrl = image?.medium?.split(":")?.slice(-1)[0] || image?.original?.split(":")?.slice(-1)[0] || undefined;
            const imageOriginalUrl = image?.original?.split(":")?.slice(-1)[0] || undefined;
            const newItem = {
                id,
                title: name,
                averageRating: rating?.average || null,
                imageUrl,
                imageOriginalUrl,
                genres: genresAsLowerCase,
                premiered,
                ended,
                status: status?.toLowerCase(),
                url: showUrl,
                language,
                updated,
            };

            tempData.push(newItem);

            return tempData;
        }, []);

        if (isSearchFetch) return result;

        const overviewEntities = tvShows.overview.entities || [];
        const overviewResultCombined = [...overviewEntities, ...result];
        const overviewResult = [...new Set(overviewResultCombined)];

        return overviewResult;
    }
);

export default fetchTvShows;
