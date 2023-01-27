import React from 'react';
import './social.scss';
import TheSims4Image from '../../media/thesims.png';
import Button from '../button';

const Social: React.FC = () => {
    return (
        <div className='social p-4 box'>
            <div className='flex flex-col gap-4'>
                <img src={TheSims4Image} className='photo rounded-lg box' alt="The Sims 4" />
                <div className='gap-2'>
                    <div className='white title'>@naweskil</div>
                    <p className='text lightgray'>
                        If you are looking for some <strong className='text black'>The Sims 4</strong> gameplay, you came to the right place! Look! Feel free to watch me on my channels below.
                    </p>
                </div>
                <Button url='https://www.twitch.tv/naweskil' icon={false} classes='button-blue button-dark' content='Twitch' />
                <Button url='https://www.youtube.com/@naweskil372' icon={false} classes='button-pink button-dark' content='YouTube' />
                <Button url='https://www.ea.com/pt-br/games/the-sims/the-sims-4/pc/gallery/browse?category=all&searchtype=ea_origin_id&sortby=downloads&time=all&searchquery=naweskil&max=50&maxis=false' icon={false} classes='button-yellow button-dark' content='EA Games' />
            </div>
        </div>
    )
}

export default Social;