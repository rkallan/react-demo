import { useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";
import useMediaQuery from "../useMediaQuery";
import { InterfaceUseDarkMode } from "./types";

const colorSchemeQuery = "(prefers-color-scheme: dark)";

function useDarkMode(defaultValue?: boolean): InterfaceUseDarkMode {
    const isDarkOS = useMediaQuery(colorSchemeQuery);
    const [isDarkMode, setDarkMode] = useLocalStorage("dark-mode", defaultValue ?? isDarkOS ?? false);

    useEffect(() => {
        setDarkMode(() => isDarkOS);
    }, [isDarkOS]);

    return {
        isDarkMode,
        toggle: () => setDarkMode((prev) => !prev),
        enable: () => setDarkMode(() => true),
        disable: () => setDarkMode(() => false),
    };
}

export default useDarkMode;
