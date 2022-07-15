import { useState } from "react";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import { useAppSelector } from "Store/hooks";
import { getAssignmentById } from "features/Clients/clientsSelector";
import { Loading } from "@rrkallan/ui-library";
import styles from "./resources/styles/assignment.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Hero = loadable(() => import(/* webpackChunkName: "Hero" */ "components/Hero"), {
    fallback: <Loading />,
});

const dateOptions: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

function Assignment(): JSX.Element {
    const { id } = useParams();
    const assignment = useAppSelector((state) => getAssignmentById(state, { id: Number(id) }));
    const [date] = useState(() => (assignment?.date ? new Date(assignment?.date)?.toLocaleDateString("en-GB", dateOptions) : undefined));

    return (
        <>
            <Hero hero={{ title: assignment?.title, image: assignment?.mainImage }} fullWidth>
                <Container variant="red" textColor="white" noUnitElement classNameContainer={styles.heroContainer}>
                    <div className={styles.unit} variant="sub-heading">
                        <span className={styles.client}>{assignment?.client}</span>
                        <span className={styles.category}>{assignment?.category}</span>
                    </div>
                    {!!date && (
                        <div className={styles.unit} variant="date">
                            <time dateTime={assignment?.date}>{date}</time>
                        </div>
                    )}
                </Container>
            </Hero>
            <Container classNameContainer={styles.container} variant="white" textColor="black" noUnitElement>
                <section className={styles.unit} variant="intro">
                    <p>{assignment?.intro}</p>
                </section>
                {!!assignment?.content && (
                    <section className={styles.unit} variant="content">
                        {assignment?.content?.map((content, index) => {
                            const key = index + 1;
                            return <p key={key}>{content}</p>;
                        })}
                    </section>
                )}
            </Container>
        </>
    );
}

export default Assignment;
