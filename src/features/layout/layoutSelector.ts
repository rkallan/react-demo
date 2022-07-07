import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Store/types";
import type { InterfaceLayoutState } from "./types";

const layoutState = ({ layout }: RootState): InterfaceLayoutState => layout;
const getFooterBoundingClientRect = createSelector(layoutState, (layout) => layout.footer || {});

export { layoutState, getFooterBoundingClientRect };
