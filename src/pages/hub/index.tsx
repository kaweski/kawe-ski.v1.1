import React from 'react';
import Card from '../../components/card';
import photo4 from '../../media/photo4.png';
import photo5 from '../../media/photo5.png';
import './hub.scss';

interface Props {
    text?: string,
}

const Hub: React.FC<Props> = () => {

    return (
        <div className='hub flex flex-col gap-4'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div className='lg:col-span-1'>
                    <div className="box p-4">
                        <Card
                            image='https://miro.medium.com/max/1400/1*E32cgmOdVTmnlSBZG9FhYg.webp'
                            content='eu gostaria de trazer minhas experiências trabalhando com meu segundo Design System'
                            title='Minha experiência com meu segundo Design System'
                            url='https://medium.com/@kaweski/minha-experiencia-com-meu-segundo-design-system-96bc7791c082'
                            external={true}
                        />
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <div className="box p-4">
                        <Card
                            image='https://miro.medium.com/max/1400/1*VdxnEc-jc7jkFumbfrMnDg.webp'
                            content='Neste post vou trazer minha trajetória dentro do Design System do Inter Product Design, o Orange DS, e como foi minha visão de aprendizado até chegar onde estou hoje.'
                            title='Orange DS, como surgiu meu primeiro Design System'
                            url='https://medium.com/inter-product-design/orange-ds-como-surgiu-meu-primeiro-design-system-aa88a481927'
                            external={true}
                        />
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className="box p-4">
                        <Card
                            image={photo5}
                            title='painting'
                            content='mais um processin de plantinha nuns vaso diferente 🪴'
                            url='https://www.instagram.com/p/CnAh4UwqA4i/'
                            external={true}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="box p-4">
                        <Card
                            image={photo4}
                            title='painting'
                            content='processin pra criar algo que se parece um pézin de tomate cereja 🍅'
                            url='https://www.instagram.com/p/Cm-ORERq9rm/'
                            external={true}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="box p-4">
                        <Card
                            image='https://cdn.dribbble.com/users/1735042/screenshots/17103420/media/839c641b9cce3d7ba4d21a2ac3e694f3.png?compress=1&resize=1600x1200&vertical=top'
                            content='And for this challenge, I used this app I created to enter a design team on Banco Inter here in Brazil, they use to be a SuperApp, and this is just a piece of an entire app made for a lot of things, one of the things - fictional - bus charger :D'
                            title='DailyUI #016 - Pop-Up / Overlay (Bottomsheet)'
                            url='https://dribbble.com/shots/17103420-DailyUI-016-Pop-Up-Overlay-Bottomsheet'
                            external={true}
                        />
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div className=' lg:col-span-2'>
                    <div className="box p-4">
                        <Card
                            image='https://cdn.dribbble.com/users/1735042/screenshots/14259216/media/7d9551ec482f4845d768e279a7871ea8.png?compress=1&resize=1600x1200&vertical=top'
                            content="For those who don't know Del.icio.us was a site to save links. You could save it to visit later, and even use as a collection of links with categories. Other people could also see the links you saved, like a social network of hyperlinks. The premise was very good! And today I tried to rebrand the app icon, mainly for use on cell phones."
                            title='DailyUI #005 - App icon'
                            url='https://dribbble.com/shots/14259216-DailyUI-005-App-icon'
                            external={true}
                        />
                    </div>
                </div>
                <div className=' lg:col-span-1'>
                    <div className="box p-4">
                        <Card
                            image='https://miro.medium.com/max/1400/1*ijA_zZSqCxI32yPXTOq-Wg.webp'
                            content='meu post sobre a minha migração de carreira saiu! Estava empolgada com esse post e quis trazer ele o mais rápido possível pra tirar todas as ideias da cabeça que estavam fresquinhas, trouxe cada capítulo que me ajudou a chegar onde estou hoje.'
                            title='Migração de carreira: como migrei de front-end para design system'
                            url='https://medium.com/@kaweski/migra%C3%A7%C3%A3o-de-carreira-como-migrei-de-front-end-para-design-system-acd9292dc3bd'
                            external={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hub;
