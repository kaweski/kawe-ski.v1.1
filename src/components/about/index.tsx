import React from 'react';
import Sign from '../sign';
import Tag from '../tag';

interface Props {
    text: string
}

const About: React.FC<Props> = ({
    text
}) => {
    return (
        <div className='box mt-10'>
            <div className='flex-col xlg:p-10 p-4'>
                <div className='space-x-2 flex items-start'>
                    <Tag text='#frontend'/>
                    <Tag text='#designsystem'/>
                    <Tag text='#virgo'/>
                </div>
                <h2 className='white title pt-5 pb-4'>
                    Well well well... welcome to my Little Space literally in World Wide Web. So, make youself at home and enjoy a bit.
                </h2>
                <p className='lightgray text'>
                    Here you can found relevant things about me and it's just a little bit of those things I want to show everyone.<br/><br/>
                    I bring somethings I like to do, some pictures I made, playlists and paintins. This weblog is actually a distraction to practice some design and code.<br/><br/>
                    If you are looking for something else, you can just try to press CMD + W and voila!
                </p>
            </div>
            <Sign/>
        </div>
    )
}

export default About;