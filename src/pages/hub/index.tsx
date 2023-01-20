import React from 'react';
import Card from '../../components/card';
import Photo6 from '../../media/photo6.png';
import Photo5 from '../../media/photo5.png';

interface Props {
    text?: string,
}

const Hub: React.FC<Props> = () => {

    return (
        <div className='flex flex-row align-top gap-10'>
            <div className='flex flex-col lg:col-span-1'>
                <Card
                    image={Photo5}
                    content='teste'
                    title='teste'
                    url='/post/teste'
                    external={false}
                />
                <Card
                    image={Photo6}
                    content='teste'
                    title='teste'
                    url='https://'
                />
            </div>
            <div className='flex flex-col lg:col-span-1'>
                <Card
                    image={Photo6}
                    content='teste'
                    title='teste'
                    url='https://'
                />
                <Card
                    image={Photo5}
                    content='teste'
                    title='teste'
                    url='https://'
                />
            </div>
            <div className='flex flex-col lg:col-span-1'>
                <Card
                    image={Photo5}
                    content='teste'
                    title='teste'
                    url='https://'
                />
                <Card
                    image={Photo6}
                    content='teste'
                    title='teste'
                    url='https://'
                />
            </div>
        </div>
    )
}

export default Hub;
