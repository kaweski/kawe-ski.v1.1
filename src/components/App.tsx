import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import routes from './Routes'

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/">
                    {routes.map((route, key) => {
                        return <Route
                            key={key}
                            path={route.path}
                            element={route.element}
                            index={route.index} />
                    })}
                </Route>
            </Routes>
            <Outlet/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
