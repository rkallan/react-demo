/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";
import { getType } from "@rrkallan/js-helpers";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { fetchClients } from "features/Clients/clientsSlice";
import { getAssignmentsEntities, assignmentsIsLoaded } from "features/Clients/clientsSelector";
import { InterfaceAssignments } from "features/Clients/types";
import styles from "./resources/styles/assignments.module.scss";

const Container = loadable(() => import(/* webpackChunkName: "Container" */ "@rrkallan/ui-library/Container"), {
    fallback: <Loading />,
});

const Quotes = loadable(() => import(/* webpackChunkName: "Quote" */ "features/Clients/Quotes"), {
    fallback: <Loading />,
});

const NoResult = loadable(() => import(/* webpackChunkName: "NoResult" */ "features/Clients/NoResult"), {
    fallback: <Loading />,
});

const Icon = loadable(() => import(/* webpackChunkName: "Icons" */ "@rrkallan/ui-library/Icons"), {
    fallback: <Loading />,
});

const getComponent: any = {
    quotes: (props: any) => <Quotes {...props} />,
    noResult: (props: any) => <NoResult {...props} />,
};

function Assignments(): JSX.Element {
    const dispatch = useAppDispatch();
    const isLoaded = useAppSelector(assignmentsIsLoaded);
    const assignmentsSplitedByRow = useAppSelector(getAssignmentsEntities);

    useEffect(() => {
        if (!isLoaded) dispatch(fetchClients({ key: "assignments" }));
    }, [dispatch, isLoaded]);

    return (
        <Container variant="black" textColor="white" fullWidth>
            <section className={styles.container}>
                {!!assignmentsSplitedByRow &&
                    assignmentsSplitedByRow.map(({ items, layout }: any) => {
                        if (layout.component) {
                            if (getType(getComponent[layout.component]) !== "function") return null;

                            const Custom = getComponent[layout.component]({ key: layout.row });
                            return Custom;
                        }

                        return (
                            <section key={layout.row} className={styles.unit} variant={layout.deviding.split("=")[0]}>
                                {!!items &&
                                    items?.map((assignment: InterfaceAssignments | any) => {
                                        const assigmentType = getType(assignment);

                                        if (assigmentType === "object") {
                                            const titleForUrl = assignment.title.trim().replace(/\s+/g, "-").toLowerCase();
                                            const url = `/work/${assignment.id}/${titleForUrl}`;
                                            const variant = ["single", !assignment.mainImage ? "no-image" : "has-image"];

                                            return (
                                                <article key={assignment.id} className={styles.item} variant={variant.join(" ")}>
                                                    <Link className={styles.link} to={url}>
                                                        <div className={styles.text}>
                                                            <span className={styles.client}>{assignment.client}</span>
                                                            <h2 className={styles.title}>{assignment.title}</h2>
                                                            <span className={styles.readMore}>
                                                                <Icon
                                                                    icon="circle"
                                                                    variant="small"
                                                                    svgProps={undefined}
                                                                    noContainer={undefined}
                                                                />
                                                                Read more
                                                            </span>
                                                        </div>
                                                        {!!assignment.mainImage && (
                                                            <figure className={styles.imageContainer}>
                                                                <img
                                                                    className={styles.image}
                                                                    src={assignment.mainImage}
                                                                    alt={assignment.title}
                                                                />
                                                            </figure>
                                                        )}
                                                    </Link>
                                                </article>
                                            );
                                        }

                                        if (assigmentType === "array") {
                                            return (
                                                <article key={layout.row} className={styles.item} variant="list">
                                                    <ul className={styles.list}>
                                                        {assignment.map((item: any) => {
                                                            const titleForUrl = item.title.trim().replace(/\s+/g, "-").toLowerCase();
                                                            const url = `${item.id}/${titleForUrl}`;

                                                            return (
                                                                <li key={item.id} className={styles.listItem}>
                                                                    <Link className={styles.link} to={url}>
                                                                        <span className={styles.client}>{item.client}</span>
                                                                        <h2 className={styles.title}>{item.title}</h2>
                                                                        <span className={styles.readMore}>
                                                                            <Icon
                                                                                icon="circle"
                                                                                variant="small"
                                                                                svgProps={undefined}
                                                                                noContainer={undefined}
                                                                            />
                                                                            Read more
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </article>
                                            );
                                        }

                                        return null;
                                    })}
                            </section>
                        );
                    })}
            </section>
        </Container>
    );
}

export default Assignments;
