import { createSlice } from "@reduxjs/toolkit";
import { validations } from "@rrkallan/js-helpers";
import fetchClients from "./clientsAsync";
import fetchClientsQuotes from "./clientsQuotesAsync";
import type { InterfaceClientsState } from "./types";

const initialState: InterfaceClientsState = {
    quotes: {
        entities: undefined,
        ids: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
    },
    assignments: {
        entities: undefined,
        ids: undefined,
        loading: "idle",
        currentRequestId: undefined,
        error: undefined,
        filter: undefined,
    },
};

const clients = createSlice({
    name: "clients",
    initialState,
    reducers: {
        setAssignmentsFilter: (state, action) => {
            const newState = state;
            const { filter } = action.payload;

            if (validations.isEmpty(filter)) {
                newState.assignments.filter = {
                    ...initialState.assignments.filter,
                };
            }

            newState.assignments.filter = filter;

            return newState;
        },
        resetClient: () => {
            const newState = initialState;

            return newState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const isQuotes = arg.key === "quotes";
                const stateKey = isQuotes ? "quotes" : "assignments";

                if (["idle", "rejected"].includes(state[stateKey].loading) && tempState[stateKey].currentRequestId === undefined) {
                    tempState[stateKey].loading = "pending";
                    tempState[stateKey].error = undefined;
                    tempState[stateKey].currentRequestId = requestId;
                }

                return tempState;
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const isQuotes = arg.key === "quotes";
                const stateKey = isQuotes ? "quotes" : "assignments";

                if (state[stateKey].loading === "pending" && state[stateKey].currentRequestId === requestId) {
                    if (!tempState[stateKey].entities) tempState[stateKey].entities = [];

                    tempState[stateKey].loading = "fulfilled";
                    tempState[stateKey].entities = action.payload?.entities;
                    tempState[stateKey].ids = action.payload?.ids;
                    tempState[stateKey].currentRequestId = undefined;
                    tempState[stateKey].error = undefined;
                }
                return tempState;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const isQuotes = arg.key === "quotes";
                const stateKey = isQuotes ? "quotes" : "assignments";
                const { error } = action.payload as { error: [] };

                if (state[stateKey].loading === "pending" && state[stateKey].currentRequestId === requestId) {
                    tempState[stateKey].loading = "rejected";
                    tempState[stateKey].error = error;
                    tempState[stateKey].currentRequestId = undefined;
                }
                return tempState;
            });
    },
});

const { resetClient, setAssignmentsFilter } = clients.actions;
const clientsReducers = clients.reducer;

export { clientsReducers, resetClient, setAssignmentsFilter, fetchClients, fetchClientsQuotes };
