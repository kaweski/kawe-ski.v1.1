import Error404 from "./error404";
import Home from "./home";
import Hub from "./hub";

export type RoutesType = {
    element: any,
    path: string,
    index: boolean,
    name: string
}

const errorPage: string = '*'

const routes: RoutesType[] = [
    { element: <Home/>, path: '', index: true, name: 'Home' },
    { element: <Hub/>, path: '/hub', index: false, name: 'Hub' },
    { element: <Error404/>, path: errorPage, index: false, name: '404' },
]

export function is404(route: RoutesType) {
    return route.path !== errorPage
}

export default routes;