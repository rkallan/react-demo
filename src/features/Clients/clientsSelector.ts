/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Store/types";
import { validations } from "@rrkallan/js-helpers";
import { clientLayout } from "./Assignments/resources/data/assignments";
import type { InterfaceClientsState, TypeRowLayout, TypeEntitiesSelector } from "./types";

const clientsState = ({ clients }: RootState): InterfaceClientsState => clients;
const getAssignmentsLoading = createSelector(clientsState, ({ assignments }) => assignments.loading);
const getAssignmentsError = createSelector(clientsState, ({ assignments }) => assignments.error);
const getAssignmentsEntities = createSelector(clientsState, ({ assignments }) => {
    const { entities } = assignments || {};
    if (validations.isEmpty(entities)) return [];

    const entitiesSplittedByRow = clientLayout.reduce(
        (previousValue: any, currentValue): TypeEntitiesSelector => {
            const { result, startWith } = previousValue;
            const { items, row, component, deviding }: TypeRowLayout = currentValue;
            const tempResult = result;
            const endWidth = startWith + items;
            const itemsForRow = entities?.slice(startWith, endWidth) || [];
            const isListView = deviding?.startsWith("list");

            const block: any = [[], []];
            if (isListView) {
                const keysAsList =
                    deviding
                        ?.split("=")[1]
                        .split(",")
                        .map((key) => Number(key) - 1) || [];

                const listIsBlock = Number(keysAsList[0] === 0);

                itemsForRow.forEach((item, key) => {
                    if (keysAsList?.includes(key)) block[listIsBlock].push(item);
                    if (!keysAsList?.includes(key)) block[Number(!listIsBlock)] = item;
                });
            }

            const resultForRow = {
                items: isListView ? block : itemsForRow,
                layout: {
                    items,
                    row,
                    component,
                    deviding,
                },
            };
            tempResult.push(resultForRow);

            const newValue = {
                result: tempResult,
                startWith: endWidth,
            };

            return newValue;
        },
        { result: [], startWith: 0 }
    );

    return entitiesSplittedByRow.result;
});
const assignmentsIsLoaded = createSelector(clientsState, ({ assignments }) => {
    const { loading, entities, error } = assignments;
    const isLoaded = (!loading && !!entities) || !!error;
    return isLoaded;
});

export { getAssignmentsLoading, getAssignmentsError, getAssignmentsEntities, assignmentsIsLoaded };
