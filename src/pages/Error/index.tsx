import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const SubRoutes = loadable(() => import(/* webpackChunkName: "SubRoutes" */ "Routes/SubRoutes"), {
    fallback: <Loading />,
});

function Error(): JSX.Element {
    return (
        <Container unitElementTag="section">
            <SubRoutes />
        </Container>
    );
}

export default Error;
