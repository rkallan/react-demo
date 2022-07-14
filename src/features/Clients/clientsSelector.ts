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
    const { entities, filter } = assignments || {};
    if (validations.isEmpty(entities)) return [];
    const filterKeys = Object.entries(filter || {});

    const entitiesFiltered =
        (filterKeys.length > 0 &&
            entities?.reduce((previousValue, currentValue: any): any => {
                const tempResult: any = previousValue;

                let isFilterValues = true;
                filterKeys.forEach(([key, value]: any) => {
                    if (isFilterValues && value !== undefined) isFilterValues = currentValue?.[key] === value;
                });

                if (isFilterValues) tempResult.push(currentValue);

                return tempResult;
            }, [])) ||
        entities;

    const entitiesSplittedByRow = clientLayout.reduce(
        (previousValue: any, currentValue): TypeEntitiesSelector => {
            const { result, startWith } = previousValue;
            const { items, row, component, deviding }: TypeRowLayout = currentValue;
            const tempResult = result;
            const endWidth = startWith + items;
            const itemsForRow = entitiesFiltered?.slice(startWith, endWidth) || [];
            const isListView = deviding?.startsWith("list");

            if (validations.isEmpty(itemsForRow) && validations.isEmpty(component))
                return {
                    result: tempResult,
                    startWith: endWidth,
                };

            const block: any = [[], []];
            if (isListView && validations.isEmpty(component)) {
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

    if (entitiesFiltered?.length === 0) {
        const error = {
            items: 0,
            layout: {
                items: 0,
                row: 1,
                component: "noResult",
                deviding: "full",
            },
        };
        entitiesSplittedByRow.result.unshift(error);
    }

    return entitiesSplittedByRow.result;
});
const assignmentsIsLoaded = createSelector(clientsState, ({ assignments }) => {
    const { loading, entities, error } = assignments;
    const isLoaded = (!loading && !!entities) || !!error;
    return isLoaded;
});

const getQuotesLoading = createSelector(clientsState, ({ quotes }) => quotes.loading);
const getQuotesError = createSelector(clientsState, ({ quotes }) => quotes.error);
const getQuotesIsLoaded = createSelector(clientsState, ({ quotes }) => {
    const { loading, entities, error } = quotes;
    const isLoaded = (!loading && !!entities) || !!error;
    return isLoaded;
});
const getQuotes = createSelector(clientsState, ({ quotes }) => quotes.entities);
const getQuote = createSelector(clientsState, ({ quotes }) => {
    const { entities } = quotes || {};
    const length = entities?.length || 0;
    const key = length - 1;

    return entities?.[key];
});

export {
    getAssignmentsLoading,
    getAssignmentsError,
    getAssignmentsEntities,
    assignmentsIsLoaded,
    getQuotesError,
    getQuotesIsLoaded,
    getQuotesLoading,
    getQuotes,
    getQuote,
};
