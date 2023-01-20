import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import routes from '../../pages/routes';
import './main.scss';
import Logo from '../../components/logo';

interface Props {
    text?: string
}

const Main: React.FC<Props> = () => {
    return (
        <div className="flex flex-col p-10">
            <header>
                <Logo/>
                <hr/>
            </header>
            <main>
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
            </main>
        </div>
    )
}

export default Main;