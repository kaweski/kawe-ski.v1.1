import React from "react";
import './post.scss';
import Button from '../button';
import Icon from '../../media/go-link.svg';

interface Props {
    image?: string,
    title: string,
    button?: boolean,
    content: string,
    url: string
}

const Post: React.FC<Props> = ({
    image,
    title,
    url,
    content
}) => {

    return (
        <article className='flex flex-col'>
            <img src={image} className='photo object-cover rounded-lg mb-4' alt='go-link'/>
            <div className='lg:flex lg:flex-col'>
                <h2 className={`text mb-4`}>
                    {title}
                </h2>
                <div className='flex flex-row justify-between gap-4'>
                    <div className='flex flex-col'>
                        <Button url={url} icon={true} classes='button-white button-dark' content={Icon} />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text lightgray'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post;
