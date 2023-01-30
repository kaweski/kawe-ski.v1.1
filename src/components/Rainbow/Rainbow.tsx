import React from 'react'
import './Rainbow.scss'

interface RainbowProps {
    children: string,
    href: string
}

const Rainbow: React.FC<RainbowProps> = ({
    children,
    href
}) => {
    return (
        <a href={href} className='rainbow'>
            {children}
        </a>
    )
}

export default Rainbow