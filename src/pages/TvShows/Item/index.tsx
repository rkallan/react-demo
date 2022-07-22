import loadable from "@loadable/component";
import { Loading } from "@rrkallan/ui-library";

const TvShow = loadable(() => import(/* webpackChunkName: "TvShow" */ "features/TvShows/TvShowsItem"), {
    fallback: <Loading />,
});

function TvShowsItem(): JSX.Element {
    return <TvShow />;
}

export default TvShowsItem;
