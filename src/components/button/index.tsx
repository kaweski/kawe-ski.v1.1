import React from "react";
import './Button.scss';
import './ButtonColors.scss';

export type ButtonType = [
    icon: string,
    url: string,
    content: string,
    classes: string
]

interface Props {
    icon?: boolean | false,
    url: string,
    content?: string,
    classes?: string
}

const Button: React.FC<Props> = ({
    icon,
    url,
    content,
    classes
}) => {
    return (
        <a href={url} target='_blank' rel="noreferrer" className={'button ' + (icon ? 'button-icon ' : '') + classes}>
        <span className='content align-middle justify-center flex'>
            {icon
                ? <img src={content} alt={content} />
                : content}
        </span>
    </a>
    )
}

export default Button;

{/* <Button url='https://www.twitch.tv/naweskil' classes='button-blue' content='Twitch' /> */}