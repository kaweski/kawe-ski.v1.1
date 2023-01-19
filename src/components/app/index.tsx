import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Nav from "../nav";
import routes from '../../pages/routes';

export default function App() {

    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <>
                        {routes
                            .map((route, key) => {
                            return <Route
                                key={key}
                                path={route.path}
                                element={route.element}
                                index={route.index} />
                        })}
                    </>
                </Route>
            </Routes>
        </div>
    );
}