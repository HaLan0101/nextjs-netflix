import React from 'react';
import LogoNetFlix from "../../public/LogoNetFlix.png";
import Link from "next/link";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalLogin from "../../components/ModalLogin";
import { useState } from "react";
import { useRouter } from "next/router";
const Index = () => {
  const [formData, setFormData] = useState({
    email: '', 
    password: '' 
  })
  const router = useRouter();
  const [showModal,setShowModal]= useState(false);
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3004/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data.user);
      if(data.user.error){
        setShowModal(true);
      }
      else{
        router.push(`/film`);
      }})
    .catch((err) => {
      setShowModal(true);
      console.log(err)});
  }

  function handleChange(e) {
      setFormData({...formData, [e.target.name] : e.target.value})
  }
    return (
        <>
    <header className='home__main'>
      <div className='home__top'>
        <div className='home__logo'>
          <img src={LogoNetFlix.src} alt="netflix" />
        </div>
      </div>
      <div className="home__form">
      <ModalLogin title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)}>
        <p>Email ou mot de passe est faux</p>
      </ModalLogin>
        <form onSubmit={e => handleSubmit(e)} action="/login" >
          <h1>S'identigier</h1>
          <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          classes="input"
          required={true}
          placeholder="E-mail"
          value={formData.email}
          handleChange={e => handleChange(e)}
              />
          <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          classes="input"
          required={true}
          placeholder="Mot de passe"
          value={formData.password}
          handleChange={e => handleChange(e)}
              />
          <Button title="S'identifier" type="submit" classes="btn btn__color-red"></Button>
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
