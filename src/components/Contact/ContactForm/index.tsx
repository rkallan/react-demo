import { useState } from "react";
import loadable from "@loadable/component";
import Loading from "@rrkallan/ui-library/Loading";
import formData from "./constants/contactForm";

const Form = loadable(() => import(/* webpackChunkName: "LoginForm" */ "@rrkallan/ui-library/Form"), {
    fallback: <Loading />,
});

const Notification = loadable(() => import(/* webpackChunkName: "Notification" */ "@rrkallan/ui-library/Notification"), {
    fallback: <Loading />,
});

function ContactForm(): JSX.Element {
    const [notificationVariant, setNotificationVariant] = useState((): string | undefined => undefined);
    const [notificationState, setNotificationState] = useState(() => "hidden");
    const [notificationMessage, setNotificationMessage] = useState((): string | undefined => undefined);
    const [loading, setLoading] = useState(() => false);

    const customSubmitHandler = async (response: Promise<Response>) => {
        setLoading(() => true);
        const result = await response;
        setNotificationVariant(() => (result.ok ? "confirm" : "error"));
        setNotificationMessage(() => {
            const message = result.ok ? "Thanks for contacting us. We will soon contact you" : "Contact form has errors";
            return message;
        });

        setTimeout(() => {
            setNotificationState(() => "visible");
            setLoading(() => false);
        }, 750);
    };

    return (
        <>
            {loading && <Loading />}
            {!!notificationMessage && !loading && (
                <Notification
                    variant={notificationVariant}
                    state={notificationState}
                    iconSize="normal"
                    icon={notificationVariant ? "confirm" : "alert"}
                    iconPosition="center"
                    showCloseButton={false}
                    customOnClickHandlerCloseButton={undefined}
                >
                    {notificationMessage || ""}
                </Notification>
            )}
            {!loading && notificationVariant !== "confirm" && (
                <Form
                    customEventHandler={undefined}
                    customSubmitHandler={customSubmitHandler}
                    disableForm={undefined}
                    resetForm={undefined}
                    submitButtonDisabled={undefined}
                    {...formData}
                    postFormWithApiCall={false}
                    postData={undefined}
                />
            )}
        </>
    );
}

export default ContactForm;
