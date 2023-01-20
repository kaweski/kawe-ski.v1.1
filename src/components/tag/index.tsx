import React from 'react';
import './tag.scss';

interface Props {
    text: string
}

const Tag: React.FC<Props> = ({
    text
}) => {
    return (
        <span className='tag text'>{text}</span>
    )
}

export default Tag;