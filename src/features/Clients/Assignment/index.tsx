import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import { useAppSelector } from "Store/hooks";
import { getAssignmentById } from "features/Clients/clientsSelector";
import { Loading } from "@rrkallan/ui-library";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "components/Hero"), {
    fallback: <Loading />,
});

function Assignment(): JSX.Element {
    const { id } = useParams();
    const assignment = useAppSelector((state) => getAssignmentById(state, { id: Number(id) }));

    return (
        <>
            <Hero hero={{ title: assignment?.title, image: assignment?.mainImage }} fullWidth>
                <Container variant="red" textColor="white">
                    {assignment?.id} {assignment?.client} - {assignment?.category} - {assignment?.date}
                </Container>
            </Hero>
            <section>{assignment?.intro}</section>
        </>
    );
}

export default Assignment;
