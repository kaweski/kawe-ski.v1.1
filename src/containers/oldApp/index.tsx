import React from 'react';
import Footer from "../footer";
import './app.scss';
import Main from '../main';
import { SidebarLeft, SidebarRight } from '../sidebar';
import Nav from '../../components/nav';

interface Props {
    text: string
}

const App: React.FC<Props> = () => {
    return (
        <div className='application content lg:mx-10 xlg:mt-10 lg:p-10 xlg:col-span-8 md:mx-4 md:p-8 p-4 mt-8'>
            {/* <Nav/> */}
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col gap-4">
                <div className='lg:order-1 flex flex-col order-1'>
                    <SidebarLeft/>
                </div>
                <div className='lg:order-2 flex flex-col md:col-span-2 order-3'>
                    <Main/>
                </div>
                <div className='lg:order-3 flex flex-col order-2'>
                    <SidebarRight/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;