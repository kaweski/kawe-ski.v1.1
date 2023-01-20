import * as React from "react";
import Button from '../button';
import Icon from '../../media/k.png';

const Logo: React.FC = () => {
    return (
        <h1 className='logo flex'>
            <Button url='#' icon={true} classes='button-orange button-dark' content={Icon} />
        </h1>
    )
}

export default Logo;