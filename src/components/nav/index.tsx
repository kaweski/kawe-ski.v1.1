import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from '../../pages/routes';
import './nav.scss';

export default function Nav() {

    let location = useLocation();

    return (
        <ul className='tabs flex flex-row justify-start align-start'>
            {routes
                .filter((route) => route.show)
                .map((route, key) => {
                return <li
                    key={key}>
                    <Link 
                        className={`tab text lightgray ${location.pathname === route.path ? 'active' : ''}`}
                        to={route.path}>
                            {route.name}
                    </Link>
                </li>
            })}
        </ul>
    )
}