import { useEffect } from "react";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "Store/hooks";
import { Loading } from "@rrkallan/ui-library";
import { fetchTvShowsLastUpdated } from "features/TvShows/tvShowsSlice";
import { getIsLastUpdatedLoaded, getLastFetchedTime, getLastUpdatedError } from "features/TvShows/tvShowsSelector";
import { getDayDifference } from "@rrkallan/js-helpers";
import styles from "./resources/styles/tvShows.module.scss";

const SubRoutes = loadable(() => import(/* webpackChunkName: "SubRoutes" */ "Routes/SubRoutes"), {
    fallback: <Loading />,
});

const Notification = loadable(() => import(/* webpackChunkName: "Notification" */ "@rrkallan/ui-library/Notification"), {
    fallback: <Loading />,
});

const getUrlParam = ({ dayDifference }: { dayDifference: number }) => {
    const urlParam = {
        since:
            (dayDifference === -1 && undefined) ||
            ((dayDifference === 0 || !dayDifference) && undefined) ||
            (dayDifference === 1 && "day") ||
            (dayDifference > 1 && dayDifference < 8 && "week") ||
            (dayDifference > 7 && dayDifference < 30 && "month") ||
            (dayDifference > 29 && undefined) ||
            (!dayDifference && undefined) ||
            undefined,
    };

    return urlParam;
};

function TvShows(): JSX.Element {
    const dispatch = useAppDispatch();
    const lastUpdatedLoaded = useAppSelector(getIsLastUpdatedLoaded);
    const lastFetchedTime = useAppSelector(getLastFetchedTime);
    const errors = useAppSelector(getLastUpdatedError);

    useEffect(() => {
        const dayDifference = getDayDifference(lastFetchedTime) ?? -1;
        const urlParam = getUrlParam({ dayDifference });

        if (!lastUpdatedLoaded || dayDifference) {
            dispatch(fetchTvShowsLastUpdated({ urlParam }));
        }
    }, [dispatch, lastFetchedTime, lastUpdatedLoaded]);

    if (errors)
        return (
            <section className={styles.container}>
                <Notification
                    variant="error"
                    state={errors ? "visible" : "hidden"}
                    iconSize="normal"
                    icon={undefined}
                    iconPosition="center"
                    showCloseButton={false}
                    customOnClickHandlerCloseButton={undefined}
                >
                    <ul>
                        {!!errors.length &&
                            errors.map((error, index) => {
                                const key = index;
                                return <li key={key}>{error}</li>;
                            })}
                    </ul>
                </Notification>
            </section>
        );

    return <SubRoutes />;
}

export default TvShows;
