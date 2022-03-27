import React from 'react';
import LogoNetFlix from "../../public/LogoNetFlix.png";
import Link from "next/link";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRef } from "react";
import { useState } from "react";
const Index = () => {
    return (
        <>
    <header className='home__main'>
      <div className='home__top'>
        <div className='home__logo'>
          <img src={LogoNetFlix.src} alt="netflix" />
        </div>
      </div>
      <div className="home__form">
        <form>
          <h1>S'identigier</h1>
          <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          classes="input"
          required={true}
          placeholder="E-mail"
              />
          <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          classes="input"
          required={true}
          placeholder="Mot de passe"
              />
          <Button title="S'identifier" type="button" classes="btn btn__color-red"></Button>
          <span>
            Première sur NetFlix ? <b><Link href="/"><a>Inscrivez-vous</a></Link></b>
          </span>
          <small>
            Cette page est protégée par Google reCAPTCHA pour nous assurer que ous n'êtes pas un robot. <b>En savoir plus</b>.
          </small>
        </form>
      </div>
    </header>
    </>
    );
}

export default Index;
