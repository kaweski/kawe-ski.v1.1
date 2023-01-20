import React from 'react';
import './sign.scss';
import Button from "../button";
import PhotoAvatar from '../../media/photo.png';
import IconLinkedin from '../../media/linkedin.svg';
import IconDribbble from '../../media/dribbble.svg';
import IconGitHub from '../../media/github.svg';

const Sign: React.FC = () => {
    return (
        <div className='sm:flex sm:flex-row sm:items-center justify-start sign p-6 sm:gap-0 grid gap-4'>
            <div className='ld:flex lg:flex-none'>
                <img className="inline-block h-16 w-16 rounded-lg" src={PhotoAvatar} alt='teste'/>
            </div>
            <div className='flex flex-col sm:pr-4 sm:pl-5 grow'>
                <h1 className='white title'>@kaweski</h1>
                <p className='lightgray text'>Some of my <strong>professional</strong> social media</p>
            </div>
            <div className='flex flex-row space-x-2 sm:col-span-0 col-span-3 sm:justify-start justify-center sm:mt-0 mt-4'>
                <Button url='https://www.linkedin.com/in/kaweski' icon={true} classes='button-white button-dark' content={IconLinkedin} />
                <Button url='https://dribbble.com/kaweski' icon={true} classes='button-white button-dark' content={IconDribbble} />
                <Button url='https://github.com/kaweski' icon={true} classes='button-white button-dark' content={IconGitHub} />
            </div>
        </div>
    )
}

export default Sign;