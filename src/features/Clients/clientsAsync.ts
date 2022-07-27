import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "@rrkallan/js-helpers";
import type { RootState } from "Store/types";
import type { TypeFetchClientsDataProp, TypeItemIdsAssignments, InterfaceAssignments } from "./types";

const fetchClients = createAsyncThunk(
    "clients/fetchClients",
    async (data: TypeFetchClientsDataProp, { rejectWithValue, getState, requestId, signal }) => {
        const { clients }: RootState = getState();
        const { loading, currentRequestId } = clients.assignments;
        const url = `${process.env.REACT_APP_API_ASSIGNMENTS}`;

        if (loading !== "pending" || requestId !== currentRequestId) return undefined;

        const response = await apiCall({
            url,
            signal,
            method: "GET",
        });

        const contentType = response.headers.get("content-type").split(";")[0];
        if (contentType !== "application/json" || !response.ok) return rejectWithValue({ error: ["Oops! Something Went Wrong"] });

        const result = await response.json();

        const ids = result.reduce((previousValue: TypeItemIdsAssignments, currentValue: InterfaceAssignments) => {
            const tempResult = previousValue;
            const { id } = currentValue || {};

            if (id) {
                tempResult[id] = {
                    ...currentValue,
                };
            }

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
