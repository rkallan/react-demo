/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLocation } from "react-router-dom";

function Error404(): JSX.Element {
    const { state }: any = useLocation();

    return (
        <div>
            <h1>404 Error page</h1>
            <p>Url: {state?.referer?.href} could not be found</p>
        </div>
    );
}

export default Error404;
