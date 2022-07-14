import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import { assignments } from "./Assignments/resources/data/assignments";
// import quotes from "./Quote/resources/data/quotes";
import type { TypeFetchClientsDataProp } from "./types";

const fetchClients = createAsyncThunk(
    "clients/fetchClients",
    async (data: TypeFetchClientsDataProp, { rejectWithValue, getState, requestId, signal }) => {
        const clientData = {
            assignments,
            // quotes,
        };
        const { clients }: RootState = getState();
        const isQuotes = data.key === "assignments";
        const key = isQuotes ? "assignments" : "assignments";
        const { loading, currentRequestId } = clients[key];

        if (loading === false || requestId !== currentRequestId) return undefined;

        const result = clientData[key];

        const entities = result;
        const ids = {};

        return {
            entities,
            ids,
        };
    }
);

export default fetchClients;
