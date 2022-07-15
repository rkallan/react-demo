import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "Store/types";
import assignments from "./Assignments/resources/data/assignments";
import type { TypeFetchClientsDataProp, TypeItemIdsAssignments } from "./types";

const fetchClients = createAsyncThunk(
    "clients/fetchClients",
    async (data: TypeFetchClientsDataProp, { rejectWithValue, getState, requestId, signal }) => {
        const { clients }: RootState = getState();
        const { loading, currentRequestId } = clients.assignments;

        if (loading === false || requestId !== currentRequestId) return undefined;

        const result = assignments;

        const ids = result.reduce((previousValue: TypeItemIdsAssignments, currentValue) => {
            const tempResult = previousValue;
            const { id } = currentValue || 0;

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

export default fetchClients;
