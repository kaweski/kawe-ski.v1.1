import React from 'react'

interface TagType {
    text: string
}

const Tag: React.FC<TagType> = ({ text }) => {

    return (
        <span className='tag text'>{text}</span>
    )
}

export default Tag