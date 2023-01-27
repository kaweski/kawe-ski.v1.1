import Error404 from "./error404";
import Home from "./home";
import Hub from "./hub";
import Posts from "./posts";
import Post from './post';

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
    { element: <Home/>, path: 'Hub', index: false, name: 'About', show: false },
    { element: <Hub/>, path: '', index: true, name: 'Hub', show: true },
    { element: <Error404/>, path: errorPage, index: false, name: '404', show: false },
    { element: <Posts/>, path: '/posts', index: false, name: 'Posts', show: false },
    { element: <Post/>, path: '/posts/:post', index: false, name: 'Post', show: false }
]

export default routes;