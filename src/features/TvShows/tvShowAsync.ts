import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import { apiCall } from "@rrkallan/js-helpers";
import type { TypeFetchTvShowDataProp } from "./types";

const fetchTvShow = createAsyncThunk(
    "shows/fetchTvShow",
    async ({ showId }: TypeFetchTvShowDataProp, { rejectWithValue, getState, requestId }) => {
        const { tvShows }: RootState = getState();
        const { loading, currentRequestId, entities } = tvShows.items;
        const urlSearchParams = "?embed[]=episodes&embed[]=cast&embed[]=images&embed[]=seasons&embed[]=crew";
        const url = `${process.env.REACT_APP_API_SHOWS}/${showId}${urlSearchParams}`;

        if (loading === false || requestId !== currentRequestId) return undefined;

        const response = await apiCall({
            url,
            method: "GET",
        });
        const contentType = response.headers.get("content-type").split(";")[0];
        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: "Rejected" });

        const jsonResult = await response.json();
        const {
            id,
            name,
            rating,
            image,
            updated,
            summary,
            premiered,
            ended,
            officialSite,
            genres,
            language,
            _embedded: embed,
        } = jsonResult;

        const { seasons, episodes, cast, images } = embed || {};
        const newItem = {
            [id]: {
                id,
                title: name,
                avarageRating: rating?.avarage || undefined,
                imageUrl: image?.medium || image?.original || undefined,
                updated,
                summary,
                premiered,
                ended,
                officialSite,
                genres,
                language,
                seasons,
                episodes,
                cast,
                images,
            },
        };

        const tempEntities = entities || {};
        const result = {
            ...tempEntities,
            ...newItem,
        };

        return result;
    }
);

export default fetchTvShow;
