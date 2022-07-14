import loadable from "@loadable/component";

const Homepage = loadable(() => import(/* webpackChunkName: "Homepage" */ "pages/Homepage"));
const Example = loadable(() => import(/* webpackChunkName: "Example" */ "pages/Example"));

const Error = loadable(() => import(/* webpackChunkName: "Error" */ "pages/Error"));
const Error403 = loadable(() => import(/* webpackChunkName: "Error403" */ "pages/Error/Error403"));
const Error404 = loadable(() => import(/* webpackChunkName: "Error404" */ "pages/Error/Error404"));

const Terms = loadable(() => import(/* webpackChunkName: "Terms" */ "pages/Terms"));
const Privacy = loadable(() => import(/* webpackChunkName: "Privacy" */ "pages/Privacy"));

const TvShows = loadable(() => import(/* webpackChunkName: "TvShows" */ "pages/TvShows"));
const TvShow = loadable(() => import(/* webpackChunkName: "TvShow" */ "pages/TvShow"));

const Work = loadable(() => import(/* webpackChunkName: "Work" */ "pages/Work"));

const routeConfiguration = [
    {
        id: 20,
        path: "/",
        exact: true,
        authenticated: false,
        Element: Homepage,
    },
    {
        id: 30,
        path: "/terms-and-conditions",
        Element: Terms,
        exact: true,
        authenticated: false,
    },
    {
        id: 40,
        path: "/privacy-policy",
        Element: Privacy,
        exact: true,
        authenticated: false,
    },
    {
        id: 50,
        path: "/tv-shows",
        Element: TvShows,
        exact: true,
        authenticated: false,
    },
    {
        id: 60,
        path: "/tv-show/:id/:title",
        Element: TvShow,
        exact: true,
        authenticated: false,
    },
    {
        id: 70,
        path: "/work",
        Element: Work,
        exact: true,
        authenticated: false,
    },
    {
        id: 1000,
        path: "/example",
        Element: Example,
        exact: true,
        authenticated: false,
    },
    {
        id: 10,
        path: "/error/*",
        Element: Error,
        title: "Error",
        routes: [
            {
                id: 10,
                routeId: 10,
                path: "403",
                Element: Error403,
                title: "Error403",
                exact: true,
            },
            {
                id: 20,
                routeId: 10,
                path: "404",
                Element: Error404,
                title: "Error404",
                exact: true,
            },
        ],
    },
    {
        id: 5,
        path: "*",
        redirect: "/error/404",
    },
];

export default routeConfiguration;
