import { createSlice } from "@reduxjs/toolkit";
import type { InterfaceLayoutState } from "./types";

const initialState: InterfaceLayoutState = {
    header: undefined,
    footer: undefined,
};

const layout = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setElementClientRect: (state, action) => {
            const newState = state;
            const { payload } = action;
            const { boundingClientRect, element } = payload;

            newState[element] = boundingClientRect;

            return newState;
        },
        resetLayout: () => {
            const newState = initialState;

            return newState;
        },
    },
});

const { setElementClientRect, resetLayout } = layout.actions;
const layoutReducers = layout.reducer;

export { layoutReducers, setElementClientRect, resetLayout };
