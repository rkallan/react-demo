import loadable from "@loadable/component";

const Homepage = loadable(() => import(/* webpackChunkName: "Homepage" */ "pages/Homepage"));
const Example = loadable(() => import(/* webpackChunkName: "Example" */ "pages/Example"));

const Error = loadable(() => import(/* webpackChunkName: "Error" */ "pages/Error"));
const Error403 = loadable(() => import(/* webpackChunkName: "Error403" */ "pages/Error/Error403"));
const Error404 = loadable(() => import(/* webpackChunkName: "Error404" */ "pages/Error/Error404"));

const Terms = loadable(() => import(/* webpackChunkName: "Terms" */ "pages/Terms"));
const Privacy = loadable(() => import(/* webpackChunkName: "Privacy" */ "pages/Privacy"));

const TvShows = loadable(() => import(/* webpackChunkName: "TvShows" */ "pages/TvShows"));
const TvShowsOverview = loadable(() => import(/* webpackChunkName: "TvShowsOverview" */ "pages/TvShows/Overview"));
const TvShowsItem = loadable(() => import(/* webpackChunkName: "TvShowsItem" */ "pages/TvShows/Item"));

const Work = loadable(() => import(/* webpackChunkName: "Work" */ "pages/Work"));
const WorkOverview = loadable(() => import(/* webpackChunkName: "WorkOverview" */ "pages/Work/Overview"));
const WorkAssignment = loadable(() => import(/* webpackChunkName: "WorkAssignment" */ "pages/Work/Item"));

const routeConfiguration = [
    {
        id: 20,
        path: "/",
        exact: true,
        authenticated: false,
        element: <Homepage />,
    },
    {
        id: 30,
        path: "/terms-and-conditions",
        element: <Terms />,
        exact: true,
        authenticated: false,
    },
    {
        id: 40,
        path: "/privacy-policy",
        element: <Privacy />,
        exact: true,
        authenticated: false,
    },
    {
        id: 50,
        path: "/tv-shows/*",
        element: <TvShows />,
        children: [
            {
                id: 10,
                routeId: 50,
                index: true,
                element: <TvShowsOverview />,
                exact: true,
                authenticated: false,
            },
            {
                id: 20,
                routeId: 50,
                path: ":id/:title",
                element: <TvShowsItem />,
                exact: true,
                authenticated: false,
            },
            {
                id: 1000,
                routeId: 50,
                path: "*",
                element: null,
                redirect: "/error/404",
            },
        ],
    },
    {
        id: 60,
        path: "/work/*",
        element: <Work />,
        children: [
            {
                id: 10,
                routeId: 60,
                index: true,
                element: <WorkOverview />,
                exact: true,
                authenticated: false,
            },
            {
                id: 20,
                routeId: 60,
                path: ":id/:title",
                element: <WorkAssignment />,
                exact: true,
                authenticated: false,
            },
            {
                id: 1000,
                routeId: 70,
                path: "*",
                element: null,
                redirect: "/error/404",
            },
        ],
    },
    {
        id: 1000,
        path: "/example",
        element: <Example />,
        exact: true,
        authenticated: false,
    },
    {
        id: 10,
        path: "/error/*",
        element: <Error />,
        title: "Error",
        children: [
            {
                id: 10,
                routeId: 10,
                path: "403",
                element: <Error403 />,
                title: "Error403",
                exact: true,
            },
            {
                id: 20,
                routeId: 10,
                path: "404",
                element: <Error404 />,
                title: "Error404",
                exact: true,
            },
        ],
    },
    {
        id: 5,
        path: "*",
        element: null,
        redirect: "/error/404",
    },
];

export default routeConfiguration;
