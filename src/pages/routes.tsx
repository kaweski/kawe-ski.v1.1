import Error404 from "./error404";
import Home from "./home";
import Hub from "./hub";

export type RoutesType = {
    element: any,
    path: string,
    index: boolean,
}

const errorPage: string = '*'

const routes: RoutesType[] = [
    { element: <Home/>, path: ('' || 'home'), index: true },
    { element: <Hub/>, path: 'hub', index: false },
    { element: <Error404/>, path: errorPage, index: false },
]

export function is404(route: RoutesType) {
    return route.path !== errorPage
}

export default routes;