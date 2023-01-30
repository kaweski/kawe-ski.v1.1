import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from './Routes'

const Nav: React.FC = () => {

    return (
        <nav className='nav'>
            <ul>
                {routes.filter((route) => route.show).map((route, key) => {
                    return (
                        <li key={key}>
                            <NavLink to={route.path}>{route.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav