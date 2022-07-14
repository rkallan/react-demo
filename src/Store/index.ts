/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { tvShowsReducers } from "features/TvShows/tvShowsSlice";
import { layoutReducers } from "features/layout/layoutSlice";
import { clientsReducers } from "features/Clients/clientsSlice";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ["tvShows"],
};

const reducer = combineReducers({
    clients: clientsReducers,
    tvShows: tvShowsReducers,
    layout: layoutReducers,
});

type TypeRootState = ReturnType<typeof reducer>;
const rootReducer = (state: TypeRootState, action: PayloadAction) => {
    if (action.type === "authentication/resetAuth") return reducer(undefined, action);

    return reducer(state, action);
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer as any);

const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            thunk: true,
        }),
    devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
