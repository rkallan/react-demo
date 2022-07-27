import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "@rrkallan/js-helpers";
import type { RootState } from "Store/types";
import type { TypeFetchClientsDataProp, InterfaceQuotes, TypeItemIdsQuotes } from "./types";

const fetchClientsQuotes = createAsyncThunk(
    "clients/fetchClients",
    async (data: TypeFetchClientsDataProp, { rejectWithValue, getState, requestId, signal }) => {
        const { clients }: RootState = getState();
        const { loading, currentRequestId } = clients.quotes;
        const url = `${process.env.REACT_APP_API_QUOTES}`;

        if (loading !== "pending" || requestId !== currentRequestId) return undefined;

        const response = await apiCall({
            url,
            signal,
            method: "GET",
        });

        const contentType = response.headers.get("content-type").split(";")[0];
        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: ["Oops! Something Went Wrong"] });

        const result = await response.json();

        const ids = result.reduce((previousValue: TypeItemIdsQuotes, currentValue: InterfaceQuotes) => {
            const tempResult = previousValue;
            const { id } = currentValue;

            tempResult[id] = {
                ...currentValue,
            };

            return tempResult;
        }, {});

        const entities = result;

        return {
            entities,
            ids,
        };
    }
);

export default fetchClientsQuotes;
