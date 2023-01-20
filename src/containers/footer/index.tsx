import React from 'react';
import './footer.scss';

interface Props {
    text?: string
}

const Footer: React.FC<Props> = () => {
    return (
        <footer className='text-center flex flex-row justify-center'>
            <div className='abuble abuble-small lightgray'>
                v2023.1.1 @ made with <span className='orange'>&lt;3</span> by <span className='arroba'>kawe.ski</span>
            </div>
        </footer>
    )
}

export default Footer;