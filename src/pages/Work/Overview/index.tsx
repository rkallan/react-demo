import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import content from "./resources/data/content";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const PageHeader = loadable(() => import(/* webpackChunkName: "PageHeader" */ "components/PageHeader"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "components/Hero"), {
    fallback: <Loading />,
});

const Assignments = loadable(() => import(/* webpackChunkName: "Assignments" */ "features/Clients/Assignments"), {
    fallback: <Loading />,
});

const Client = loadable(() => import(/* webpackChunkName: "Client" */ "features/Clients"), {
    fallback: <Loading />,
});

const Contact = loadable(() => import(/* webpackChunkName: "Contact" */ "components/Contact"), {
    fallback: <Loading />,
});

const FilterClients = loadable(() => import(/* webpackChunkName: "FilterClients" */ "features/Clients/Assignments/Filter"), {
    fallback: <Loading />,
});

function WorkOverview(): JSX.Element {
    const { pageHeader } = content;
    const { hero } = pageHeader;

    return (
        <>
            <PageHeader>
                <Hero {...hero} />
                <Container variant="white" textColor="black" fullWidth>
                    <FilterClients />
                </Container>
            </PageHeader>
            <Assignments />
            <Client />
            <Contact />
        </>
    );
}

export default WorkOverview;
