import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
import './ButtonColors.scss'

interface ButtonTypes {
    url: string,
    external?: boolean,
    children: React.ReactNode
}

const Button: React.FC<ButtonTypes> = ({
    url,
    external,
    children
}) => {
    const classes = 'button button-orange'
    return (
        <>
            {external
                ?
                <a className={classes} href={url} target="_blank" rel="noreferrer">
                    {children}
                </a>
                :
                <Link className={classes} to={url}>
                    {children}
                </Link>
            }
        </>
    )
}

export default Button