import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import content from "./resources/data/content";

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

function Work(): JSX.Element {
    const { pageHeader } = content;

    return (
        <>
            <Hero {...pageHeader} />
            <Assignments />
            <Client />
            <Contact />
        </>
    );
}

export default Work;
