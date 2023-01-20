import React from "react";
import { Link } from "react-router-dom";
import './Button.scss';
import './ButtonColors.scss';

interface Props {
    icon?: boolean | false,
    url: string,
    content?: string,
    classes?: string
    external?: boolean
}

const Button: React.FC<Props> = ({
    icon,
    url,
    content,
    classes,
    external
}) => {

    function renderExternal() {
        return (
            <a href={url} target={external ? '_blank' : '_self'} rel="noreferrer" className={'button ' + (icon ? 'button-icon ' : '') + classes}>
                <span className='content align-middle justify-center flex'>
                    {icon
                        ? <img src={content} alt={content} />
                        : content}
                </span>
            </a>
        )
    }

    function renderSelf() {
        return (
            <Link to={url} className={'button ' + (icon ? 'button-icon ' : '') + classes}>
                <span className='content align-middle justify-center flex'>
                    {icon
                        ? <img src={content} alt={content} />
                        : content}
                </span>
            </Link>
        )
    }

    return external ? renderExternal() : renderSelf()
}

export default Button;