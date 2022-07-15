import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";

const Assignment = loadable(() => import(/* webpackChunkName: "Assignment" */ "features/Clients/Assignment"), {
    fallback: <Loading />,
});

function WorkItem(): JSX.Element {
    return <Assignment />;
}

export default WorkItem;
