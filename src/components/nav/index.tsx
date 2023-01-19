import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import routes, { is404 } from '../../pages/routes';

export default function Nav() {

    return (
        <div>
            <nav>
                <ul>
                    <>
                        {routes
                            .filter(is404)
                            .map((route, key) => {
                            return <li key={key}>
                                <Link to={route.path}>{route.path}</Link>
                            </li>
                        })}
                    </>
                </ul>
            </nav>

            <hr />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}