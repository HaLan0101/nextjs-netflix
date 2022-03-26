import React from 'react';
import { useEffect, useState } from "react";
import LogoNetFlix from "../public/LogoNetFlix.png";
import UserNetFlix from "../public/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    if (typeof window !== "undefined") {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        };
      }
    return (
        <>
        <header className={isScrolled ? "header__main scrolled" : "header__main"}>
            <div className='header__logo'>
                <img src={LogoNetFlix.src} alt="netflix"/>
                <div className='header__nav__left'>
                    <ul className='nav__list'>
                        <li className='nav__item'><a href="">Acceuil</a></li>
                        <li className='nav__item'><a href="">Séries</a></li>
                        <li className='nav__item'><a href="">Films</a></li>
                        <li className='nav__item'><a href="">Nouveautés les plus regardées</a></li>
                        <li className='nav__item'><a href="">Ma liste</a></li>
                    </ul>
                </div>
            </div>
            <div className='header__nav__right'>
                <ul className='nav__list'>
                    <li className='nav__item'><FontAwesomeIcon icon="search" /></li>
                    <li className='nav__item'><a href="">DIRECT</a></li>
                    <li className='nav__item'><a href="">Jeunesse</a></li>
                    <li className='nav__item'><FontAwesomeIcon icon="bell" /></li>
                    <li className='nav__item'>
                        <img src={UserNetFlix.src} alt="" />
                    </li>
                </ul>
            </div>
        </header>
        </>
    );
}

export default Header;
