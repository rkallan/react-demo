import { ThunkAction, Action } from "@reduxjs/toolkit";
import { store } from "Store";

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

type TypeLoading = "idle" | "pending" | "fulfilled" | "rejected";
type TypeCurrentRequestId = string | undefined;
type TypeError = string[] | undefined;

export type { AppDispatch, RootState, AppThunk, TypeLoading, TypeCurrentRequestId, TypeError };
