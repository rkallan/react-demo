import heroImage from "../images/header.png";

function PageTitle() {
    return (
        <div>
            A selection of projects that <b>pioneer</b> <b>tech</b> and <b>marketing</b> to help brands stay ahead.
        </div>
    );
}

const content = {
    pageHeader: {
        variant: "black",
        textColor: "white",
        fullWidth: true,
        hero: {
            title: <PageTitle />,
            image: heroImage,
        },
    },
};

export default content;
