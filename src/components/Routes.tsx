import React from 'react'
import About from './About'
import Error from './Error404'
import Home from './Home'
import Posts from './Posts/Posts'

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
    { element: <Home/>, path: '/', index: true, name: 'Home', show: true },
    { element: <Posts/>, path: '/posts', index: false, name: 'Posts', show: true },
    { element: <About/>, path: '/about', index: false, name: 'About', show: true },
    { element: <Posts/>, path: '/posts/:id', index: false, name: 'Posts', show: false },
    { element: <Error/>, path: errorPage, index: false, name: '404', show: false },
]

export default routes