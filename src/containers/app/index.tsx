import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import routes from '../../pages/routes';
import './app.scss'

export default function App() {

    return (
        <div className="flex flex-col p-10">
            <Nav/>
            <Routes>
                <Route path="/">
                    {routes
                        .map((route, key) => {
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
        </div>
    );
}