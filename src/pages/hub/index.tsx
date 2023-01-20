import React from 'react';
import Post from '../../components/post';
import Photo7 from '../../media/photo7.png';
import Photo6 from '../../media/photo6.png';
import Photo5 from '../../media/photo5.png';
import Photo4 from '../../media/photo4.png';
import Tag from '../../components/tag';

interface Props {
    text?: string,
}

const Hub: React.FC<Props> = ({
    text
}) => {

    return (
        <div className='box p-10 mt-10 posts'>
            <div className='flex flex-row align-top gap-10'>
                <div className='flex flex-row relative'>
                    <article className='flex flex-col align-top'>
                        <Post
                            image={Photo4}
                            content='teste'
                            title='teste'
                            url='https://'
                        />
                        <a href='https://www.instagram.com/stories/highlights/17853385142837903/'>
                            <img className="photo object-cover" src={Photo7} alt='teste'/>
                        </a>
                        <div className='right-0 bottom-0 p-4 space-x-2 flex flex-row items-start absolute'>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                            <Tag text='#tag'/>
                        </div>
                    </article>
                </div>
                <div className='flex flex-col'>
                    <Post
                        image={Photo5}
                        content='teste'
                        title='teste'
                        url='https://'
                    />
                </div>
                <div className='flex flex-col lg:col-span-1'>
                    <Post
                        image={Photo6}
                        content='teste'
                        title='teste'
                        url='https://'
                    />
                </div>
                <div className='flex flex-col lg:col-span-1'>
                    <Post
                        image={Photo5}
                        content='teste'
                        title='teste'
                        url='https://'
                    />
                    <Post
                        image={Photo6}
                        content='teste'
                        title='teste'
                        url='https://'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hub;
