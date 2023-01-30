import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
import './ButtonColors.scss'

interface ButtonTypes {
    url: string,
    external?: boolean,
    children: React.ReactNode,
    color?: 'white' | 'pink' | 'green' | 'gray' | 'blue' | 'yellow' | 'orange' | 'black',
    lightmode?: boolean
}

const Button: React.FC<ButtonTypes> = ({
    url,
    external,
    children,
    color,
    lightmode
}) => {
    const classes = `button button-${color ? color : 'black'} ${lightmode? '' : 'button-dark'}`
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