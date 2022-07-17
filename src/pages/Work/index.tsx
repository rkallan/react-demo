import { useEffect } from "react";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { fetchClients } from "features/Clients/clientsSlice";
import { assignmentsIsLoaded } from "features/Clients/clientsSelector";
import { Loading } from "@rrkallan/ui-library";

const SubRoutes = loadable(() => import(/* webpackChunkName: "SubRoutes" */ "Routes/SubRoutes"), {
    fallback: <Loading />,
});

function Work(): JSX.Element {
    const dispatch = useAppDispatch();
    const isLoaded = useAppSelector(assignmentsIsLoaded);

    useEffect(() => {
        if (!isLoaded) dispatch(fetchClients({ key: "assignments" }));
    }, [dispatch, isLoaded]);

    if (!isLoaded) return <Loading />;

    return <SubRoutes />;
}

export default Work;
