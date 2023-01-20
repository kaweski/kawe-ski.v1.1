import React from 'react';
import Footer from "../footer";
import './app.scss';
import Main from '../main';
import { SidebarLeft, SidebarRight } from '../sidebar';
import Nav from '../../components/nav';

interface Props {
    text: string
}

const App: React.FC<Props> = ({
    text
}) => {
    return (
        <div className='xlg:grid xlg:grid-cols-10 lg:mt-40 flex flex-col mt-8 md:p-0 p-4'>
            <div></div>
            <div className='application content lg:mx-10 xlg:mt-10 lg:p-10 xlg:col-span-8 md:mx-4 md:mt-40 md:p-8 p-4 mt-20'>
                <Nav/>
                <div className="lg:grid lg:grid-cols-4 lg:gap-10 md:grid md:grid-cols-2 flex flex-col gap-4">
                    <div className='lg:order-1 flex flex-col order-2'>
                        <SidebarLeft text='teste'/>
                    </div>
                    <div className='lg:order-2 flex flex-col md:col-span-2 order-1'>
                        <Main text='teste'/>
                    </div>
                    <div className='flex flex-col order-3'>
                        <SidebarRight text='teste'/>
                    </div>
                </div>
                {/* <Posts /> */}
                <Footer/>
            </div>
            <div></div>
        </div>
    )
}

export default App;