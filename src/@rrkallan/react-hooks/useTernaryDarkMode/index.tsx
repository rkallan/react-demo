import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { useMediaQuery, useUpdateEffect } from "@rrkallan/react-hooks";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

type TernaryDarkMode = "system" | "dark" | "light";
interface UseTernaryDarkModeOutput {
    isDarkMode: boolean;
    ternaryDarkMode: TernaryDarkMode;
    setTernaryDarkMode: Dispatch<SetStateAction<TernaryDarkMode>>;
    toggleTernaryDarkMode: () => void;
}

function useTernaryDarkMode(): UseTernaryDarkModeOutput {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
    const [ternaryDarkMode, setTernaryDarkMode] = useLocalStorage<TernaryDarkMode>("usehooks-ts-ternary-dark-mode", "system");
    const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

    useUpdateEffect(() => {
        if (ternaryDarkMode === "system") {
            setDarkMode(isDarkOS);
        }
    }, [isDarkOS]);

    useEffect(() => {
        switch (ternaryDarkMode) {
            case "light":
                setDarkMode(false);
                break;
            case "system":
                setDarkMode(isDarkOS);
                break;
            case "dark":
                setDarkMode(true);
                break;
        }
    }, [ternaryDarkMode, isDarkOS]);

    function toggleTernaryDarkMode() {
        const toggleDict: Record<TernaryDarkMode, TernaryDarkMode> = {
            light: "system",
            system: "dark",
            dark: "light",
        };
        setTernaryDarkMode((prevMode) => toggleDict[prevMode]);
    }

    return {
        isDarkMode,
        ternaryDarkMode,
        setTernaryDarkMode,
        toggleTernaryDarkMode,
    };
}

export default useTernaryDarkMode;
