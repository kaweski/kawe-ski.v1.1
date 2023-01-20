import React from 'react';
import './sidebar.scss'
import Button from '../../components/button';
import Post from '../../components/post';
import Photo4 from '../../media/photo4.png';
import IconTwitter from '../../media/twitter.png';

interface Props {
    text: string
}

const SidebarLeft: React.FC<Props> = ({
    text
}) => {
    return (
        <div className='sidebar sidebar-left lg:pr-10 md:pr-4'>
                <div className='p-4 box mb-10'>
                    <Post
                        title='to cocentrate'
                        image={Photo4}
                        content='Little songs to think, study, focus on work, concentrate, read and sleep.'
                        url='https://open.spotify.com/playlist/3IhEuFUth2uCuNXOlAtuhk?si=5922c786a51244a5'/>
                </div>
                <div className='p-4 box mb-4'>
                    <Post
                        title='to cocentrate'
                        image={Photo4}
                        content='Little songs to think, study, focus on work, concentrate, read and sleep.'
                        url='https://open.spotify.com/playlist/3IhEuFUth2uCuNXOlAtuhk?si=5922c786a51244a5'/>
                </div>
                
                <div className='grid grid-rows-3 gap-4'>
                    <Button url='https://open.spotify.com/user/hipihipiurra?si=88aaed5c1a2447db' content='Spotify' icon={false} classes='button-black button-dark' />
                    <Button url='https://br.pinterest.com/naweskil' content='Pinterest' icon={false} classes='button-black button-dark' />
                    <Button url='https://twitter.com/naweskil' content='Twitter' icon={false} classes='button-black button-dark' />
                </div>
            </div>
    )
}

const SidebarRight: React.FC<Props> = ({
    text
}) => {
    return (
        <div className='sidebar sidebar-right lg:pl-10 md:pl-4'>
            <div className='box p-4 mb-10'>
                <Post
                    title='to cocentrate'
                    image={Photo4}
                    content='Little songs to think, study, focus on work, concentrate, read and sleep.'
                    url='https://open.spotify.com/playlist/3IhEuFUth2uCuNXOlAtuhk?si=5922c786a51244a5'/>
            </div>
            <div className='box mt-10 p-4 flex flex-row items-end'>
                <p className='abuble abuble-small lightgray text-right mr-4'>
                    But if you still want to stalk a little more, you can go check my secret Twitter account.
                    BUT WATCH OUT! I reclaim a lot in page, so don't bother me. :)
                </p>
                <div className='grow'>
                    <Button url='https://twitter.com/naweskil' icon={true} classes='button-black button-dark' content={IconTwitter} />
                </div>
            </div>
            <hr/>
            <div className='grid grid-rows-2 gap-4'>
                <Button url='https://www.paypal.com/donate/?business=7N2KWG5ZVG9YA&no_recurring=0&item_name=Hello%21%0AHelp+buying+me+a+coffee.+%E2%98%95%EF%B8%8F&currency_code=BRL' content='Buy me a coffee' icon={false} classes='button-orange button-dark' />
                <Button url='mailto:nat@kawe.ski' content='Send me a letter' icon={false} classes='button-blue button-dark' />
            </div>
        </div>
    )
}

export {
    SidebarLeft,
    SidebarRight
};