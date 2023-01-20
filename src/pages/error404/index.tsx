import React from 'react';
import { Link } from "react-router-dom";

interface Props {
    text?: string
}

const Error404: React.FC<Props> = () => {
    return (
        <div className='box p-4'>
            <h2>Oopsy something went wrong!!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}

export default Error404;