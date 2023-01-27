import React from 'react';
import './sign.scss';
import Button from "../button";
import PhotoAvatar from '../../media/photo.png';
import IconLinkedin from '../../media/linkedin.svg';
import IconDribbble from '../../media/dribbble.svg';
import IconGitHub from '../../media/github.svg';

const Sign: React.FC = () => {
    return (
        <div className='flex flex-col sign p-4 grid gap-4 box'>
            <div className='flex flex-row gap-2 items-center'>
                <img className="inline-block h-16 w-16 rounded-lg" src={PhotoAvatar} alt='teste'/>
                <h1 className='white title'>@kaweski</h1>
            </div>
            <div className='flex flex-row gap-4'>
                <Button url='https://www.linkedin.com/in/kaweski' icon={true} classes='button-white button-dark' content={IconLinkedin} />
                <Button url='https://dribbble.com/kaweski' icon={true} classes='button-white button-dark' content={IconDribbble} />
                <Button url='https://github.com/kaweski' icon={true} classes='button-white button-dark' content={IconGitHub} />
            </div>
        </div>
    )
}

export default Sign;