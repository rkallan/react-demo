import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Notification = loadable(() => import(/* webpackChunkName: "Notification" */ "@rrkallan/ui-library/Notification"), {
    fallback: <Loading />,
});

function NoResult(): JSX.Element {
    return (
        <Container unitElementTag="article" variant="white" textColor="black">
            <Notification
                variant="warning"
                state="visible"
                iconSize="normal"
                icon="alert"
                iconPosition="center"
                showCloseButton={false}
                customOnClickHandlerCloseButton={undefined}
            >
                There are no results to show
            </Notification>
        </Container>
    );
}

export default NoResult;
