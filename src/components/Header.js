import React from 'react';
import LogoNetFlix from "../public/LogoNetFlix.png";
import Link from "next/link";
const Header = () => {
    return (
        <header className='header__main'>
            <div className='header__top'>
                <div className='header__logo'>
                <img src={LogoNetFlix.src} alt="netflix"/>
                </div>
                <div className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                    </li>
                    <li className='nav__item'>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
