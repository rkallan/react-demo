import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import quotes from "features/Clients/Quotes/resources/data/quotes";
import type { TypeFetchClientsDataProp, InterfaceQuotes, TypeItemIdsQuotes } from "./types";

const fetchClientsQuotes = createAsyncThunk(
    "clients/fetchClients",
    async (data: TypeFetchClientsDataProp, { rejectWithValue, getState, requestId, signal }) => {
        const { clients }: RootState = getState();
        const { loading, currentRequestId } = clients.quotes;

        if (loading === false || requestId !== currentRequestId) return undefined;

        const result = quotes;

        const ids = quotes.reduce((previousValue: TypeItemIdsQuotes, currentValue: InterfaceQuotes) => {
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
