import LogoNetFlix from "../public/LogoNetFlix.png";
import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3004/users', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then((data) =>{
      console.log(data);
      router.push(`/film`);
    })
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
        <div className='home__nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
            <Button type="button" classes="btn btn__color-black" title="Français"></Button>
            </li>
            <li className='nav__item'>
              <Link href="/login">
                <form action="/login">
                  <Button type="button" classes="btn btn__color-red" title="S'identifier"></Button>
                </form>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="home__below">
        <h1>Films, séries TV et bien plus en illimité.</h1>
        <h2>Où que vous soyez. Annulez à tout moment.</h2>
        <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
        <form className="home__input" onSubmit={e => handleSubmit(e)}>
          <Input
            label="Email"
            name="email"
            id="email"
            type="email"
            classes="form__input"
            required={true}
            placeholder="Email"
            value={formData.email}
            handleChange={e => handleChange(e)}
                />
            <Input
            label="Mot de passe"
            name="password"
            id="password"
            type="password"
            classes="form__input"
            required={true}
            placeholder="Mot de passe"
            value={formData.password}
            handleChange={e => handleChange(e)}
                />
            <Button type="submit" classes="btn btn__color-red" title="Entregistrer"></Button>
        </form>
      </div>
    </header>
    </>
  )
}