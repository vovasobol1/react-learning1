import React from 'react';
import c from './Header.module.css';

const Header = () =>{
    return (
        <header className={c.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'></img>
        </header>
    );
}

export default Header