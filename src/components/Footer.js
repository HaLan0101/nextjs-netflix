import React from 'react';
import Button from "../components/Button";
const Footer = () => {
    return (
        <footer className="footer__main">
            <div className='footer__content'>
            <p>Des questions ? Appelez le <a href="tel:(+33) 0805-543-063">(+33) 0805-543-063</a></p>
            <div className='footer__list'>
                <ul className='footer__item'>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Relations Investisseurs</a></li>
                    <li><a href="">Modes de lecture</a></li>
                    <li><a href="">Mentions légales</a></li>
                    <li><a href="">Seulement sur Netflix</a></li>
                </ul>
                <ul className='footer__item'>
                    <li><a href="">Centre d'aide</a></li>
                    <li><a href="">Recrutement</a></li>
                    <li><a href="">Conditions d'utilisation</a></li>
                    <li><a href="">Nous contacter</a></li>
                </ul>
                <ul className='footer__item'>
                    <li><a href="">Compte</a></li>
                    <li><a href="">Utiliser des cartes cadeaux</a></li>
                    <li><a href="">Confidentialité</a></li>
                    <li><a href="">Test de vitesse</a></li>
                </ul>
                <ul className='footer__item'>
                    <li><a href="">Presse</a></li>
                    <li><a href="">Acheter des cartes cadeaux</a></li>
                    <li><a href="">Préférences de cookies</a></li>
                    <li><a href="">Informations légales</a></li>
                </ul>
            </div>
            <Button type="button" classes="btn btn__color-black" title="Français">
            </Button>
            <p>Netflix France</p>
            </div>
        </footer>
    );
}

export default Footer;
