/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import content from "./resources/data/content";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "components/Hero"), {
    fallback: <Loading />,
});

const Client = loadable(() => import(/* webpackChunkName: "Client" */ "components/Client"), {
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

            <Container>Blog items</Container>

            <Client />

            <Contact />
        </>
    );
}

export default Work;
