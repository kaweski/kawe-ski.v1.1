import React from 'react'

interface TagType {
    text: string
}

const Tag: React.FC<TagType> = ({ text }) => {
    const TagStyles = {
        padding: '8px',
        marginRight: '8px',
        backgroundColor: 'black',
        color: 'gray'
    }
    return (
        <span style={TagStyles}>{text}</span>
    )
}

export default Tag