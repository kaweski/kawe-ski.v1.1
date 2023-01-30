import React, { PropsWithChildren } from 'react'
import Button from './Button/Button'

interface CardType {
    title: string,
    image?: string,
    hasButton?: boolean | false,
    url: string,
    external?: boolean
}

const Card: React.FC<PropsWithChildren<CardType>> = ({
    title,
    image,
    hasButton,
    url,
    external,
    children
}) => {
    return (
        <article className='flex flex-col'>
            {image 
                ? <img src={image} alt={image}/>
                : ''}
            <div>
                <h2>{title}</h2>
                <div>
                    <div>
                        {children}
                    </div>
                    {hasButton
                        ? <Button url={url} external={external}>Read more</Button>
                        : ''}
                </div>
            </div>
        </article>
    )
}

export default Card