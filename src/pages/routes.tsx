import Error404 from "./error404";
import Home from "./home";
import Hub from "./hub";
import Post from "./post";
import Posts from "./posts";

export type RoutesType = {
    element: any,
    path: string,
    index: boolean,
    name: string,
    title?: string,
    show?: boolean
}

const errorPage: string = '*';

const routes: RoutesType[] = [
    { element: <Home/>, path: '', index: true, name: 'About', show: false },
    { element: <Hub/>, path: '/hub', index: false, name: 'Hub', show: true },
    { element: <Error404/>, path: errorPage, index: false, name: '404', show: false },
    { element: <Posts/>, path: '/posts', index: false, name: 'Posts', show: true },
    { element: <Post/>, path: '/posts/:post', index: false, name: ':post', show: false }
]

export default routes;