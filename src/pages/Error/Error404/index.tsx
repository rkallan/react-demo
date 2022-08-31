import { useLocation } from "react-router-dom";
import type { InterfaceLocation } from "./types";

function Error404(): JSX.Element {
    const { state } = useLocation() as InterfaceLocation;
    const { href } = state.referer || {};

    return (
        <>
            <h1>404 Error page</h1>
            <p>Page {href} could not be found</p>
        </>
    );
}

export default Error404;
