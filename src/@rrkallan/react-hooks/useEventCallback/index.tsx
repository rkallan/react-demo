/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@rrkallan/react-hooks";

export default function useEventCallback<Args extends unknown[], R>({ fn }: { fn: (...args: Args) => R }) {
    const ref = useRef<typeof fn>(() => {
        throw new Error("Cannot call an event handler while rendering.");
    });

    useIsomorphicLayoutEffect(() => {
        ref.current = fn;
    }, [fn]);

    return useCallback((...args: Args) => ref.current(...args), [ref]);
}
