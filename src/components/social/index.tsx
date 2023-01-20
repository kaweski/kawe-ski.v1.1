import React from 'react';
import './social.scss';
import TheSims4Image from '../../media/thesims.png';
import Button from '../button';

interface Props {
    text: string
}

const Social: React.FC<Props> = ({
    text
}) => {
    return (
        <div className='social box mt-10'>
            <div className='flex flex-row sm:p-10 p-4'>
                <div className='text-right'>
                    <div className='white title'>@naweskil</div>
                    <hr/>
                    <p className='text lightgray'>
                        If you are looking for some <strong className='text black'>The Sims 4</strong> gameplay, you came to the right place! Look! Feel free to watch me on my channels below.
                    </p>
                </div>
                <div className='sm:pl-8 pl-4'>
                    <img src={TheSims4Image} className='photo rounded-lg box' alt="The Sims 4" />
                </div>
            </div>
            <div className='social-buttons flex sm:flex-row sm:items-center sm:justify-between sm:space-x-8 p-6 flex-col sm:gap-0 gap-4'>
                <Button url='https://www.twitch.tv/naweskil' icon={false} classes='button-blue button-dark' content='Twitch' />
                <Button url='https://www.youtube.com/@naweskil372' icon={false} classes='button-pink button-dark' content='YouTube' />
                <Button url='https://www.ea.com/pt-br/games/the-sims/the-sims-4/pc/gallery/browse?category=all&searchtype=ea_origin_id&sortby=downloads&time=all&searchquery=naweskil&max=50&maxis=false' icon={false} classes='button-yellow button-dark' content='EA Games' />
            </div>
        </div>
    )
}

export default Social;