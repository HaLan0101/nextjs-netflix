import React from 'react';
import { useState } from "react";
import LogoNetFlix from "../public/LogoNetFlix.png";
import UserNetFlix from "../public/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../components/Search";
import Link from "next/link";
const Header = (props) => {
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
                <Link href="/film"><a><img src={LogoNetFlix.src} alt="netflix"/></a></Link>
                <div className='header__nav__left'>
                    <ul className='nav__list'>
                        <li className='nav__item'><Link href="/film"><a>Acceuil</a></Link></li>
                        <li className='nav__item'><a href="">Séries</a></li>
                        <li className='nav__item'><a href="">Films</a></li>
                        <li className='nav__item'><a href="">Nouveautés les plus regardées</a></li>
                        <li className='nav__item'><Link href="/wishlist"><a>Ma liste</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className='header__nav__right'>
                <ul className='nav__list'>
                    <li className='nav__item'> 
                        <Search message="Titre....." onChange={props.onChange}></Search>
                    </li>
                    <li className='nav__item'><a href="">DIRECT</a></li>
                    <li className='nav__item'><a href="">Jeunesse</a></li>
                    <li className='nav__item'><FontAwesomeIcon icon="bell" /></li>
                    <li className='nav__item'>
                    <Link href="/profil"><a href=""><img src={UserNetFlix.src} alt="" /></a></Link>
                    </li>
                </ul>
            </div>
        </header>
        </>
    );
}

export default Header;
