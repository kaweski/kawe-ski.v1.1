import React from 'react';
import Button from '../button';
import Sign from '../sign';
import Tag from '../tag';

const About: React.FC = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Sign />
            <p className='lightgray text'>
                Here you can found relevant things about me and it's just a little bit of those things I want to show everyone.<br/><br/>
                I bring somethings I like to do, some pictures I made, playlists and paintins. This weblog is actually a distraction to practice some design and code.<br/><br/>
                If you are looking for something else, you can just try to press CMD + W and voila!
            </p>
            <Button url='https://www.paypal.com/donate/?business=7N2KWG5ZVG9YA&no_recurring=0&item_name=Hello%21%0AHelp+buying+me+a+coffee.+%E2%98%95%EF%B8%8F&currency_code=BRL' content='Buy me a coffee' icon={false} classes='button-black button-dark' />
            <Button url='mailto:nat@kawe.ski' content='Send me a letter' icon={false} classes='button-black button-dark' />
            {/* <div className=''> */}
                {/* <div className='space-x-2 flex items-start'>
                    <Tag text='#frontend'/>
                    <Tag text='#designsystem'/>
                    <Tag text='#virgo'/>
                </div> */}
                {/* <h2 className='white title pt-5 pb-4'>
                    Well well well... welcome to my Little Space literally in World Wide Web. So, make youself at home and enjoy a bit.
                </h2> */}
            {/* </div> */}
        </div>
    )
}

export default About;