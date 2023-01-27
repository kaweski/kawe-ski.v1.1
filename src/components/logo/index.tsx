import * as React from "react";
import Icon from '../../media/k.png';
import { Link } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("dark");

const changeTheme = {
    "light": {
        content: 'Turn off',
        classes: 'button button-black button-dark'
    },
    "dark": {
        content: 'Turn on the lights',
        classes: 'button button-yellow button-dark'
    }
};

const Logo: React.FC = () => {

    const [theme, setTheme] = useState<ThemeContextType>("dark");

    // React.useEffect(() => {
    //     console.log(theme);
    // })

    return (
    //     <ThemeContext.Provider value={theme}>
    //         <h1 className='logo flex flex-row justify-between'>
    //             <Link to='/' className='button button-icon button-orange button-dark'>
    //                 <span className='content align-middle justify-center flex'>
    //                     <img src={Icon} alt={Icon} />
    //                 </span>
    //             </Link>
    //             <button 
    //                 onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
    //                 className={changeTheme[theme].classes}>
    //                     <span className='content align-middle justify-center flex'>
    //                         {changeTheme[theme].content + ''}
    //                     </span>
    //             </button>
    //         </h1>
    //     </ThemeContext.Provider>
        <h1 className='logo flex flex-row justify-between'>
            <Link to='/' className='button button-icon button-orange button-dark'>
                <span className='content align-middle justify-center flex'>
                    <img src={Icon} alt={Icon} />
                </span>
            </Link>
        </h1>
    )
}

export default Logo;