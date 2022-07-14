import { createSlice } from "@reduxjs/toolkit";
import fetchClients from "./clientsAsync";
import type { InterfaceClientsState } from "./types";

const initialState: InterfaceClientsState = {
    quotes: {
        entities: undefined,
        ids: undefined,
        loading: false,
        currentRequestId: undefined,
        error: undefined,
    },
    assignments: {
        entities: undefined,
        ids: undefined,
        loading: false,
        currentRequestId: undefined,
        error: undefined,
    },
};

const clients = createSlice({
    name: "clients",
    initialState,
    reducers: {
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

                tempState[stateKey].loading = true;
                tempState[stateKey].error = undefined;
                tempState[stateKey].currentRequestId = requestId;

                return tempState;
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                const tempState = state;
                const { requestId, arg } = action.meta;
                const isQuotes = arg.key === "quotes";
                const stateKey = isQuotes ? "quotes" : "assignments";

                if (state[stateKey].loading && state[stateKey].currentRequestId === requestId) {
                    if (!tempState[stateKey].entities) tempState[stateKey].entities = [];

                    tempState[stateKey].loading = false;
                    tempState[stateKey].entities = action.payload?.entities;
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
                const { error } = action.payload as { error: string };

                if (state[stateKey].loading && state[stateKey].currentRequestId === requestId) {
                    tempState[stateKey].loading = false;
                    tempState[stateKey].error = error;
                    tempState[stateKey].currentRequestId = undefined;
                }
                return tempState;
            });
    },
});

const { resetClient } = clients.actions;
const clientsReducers = clients.reducer;

export { clientsReducers, resetClient, fetchClients };
