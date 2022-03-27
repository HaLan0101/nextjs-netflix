import LogoNetFlix from "../public/LogoNetFlix.png";
import Link from "next/link";
import Button from "../components/Button";
import { useRef } from "react";
import { useState } from "react";
export default function Home() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
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
        {!email ? (
          <div className="home__input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <Button type="button" classes="btn btn__color-red" title="Commencer" function={handleStart}></Button>
          </div>
        ) : (
          <form className="home__input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <Button type="button" classes="btn btn__color-red" title="Entregistrer" function={handleFinish}></Button>
          </form>
        )}
      </div>
    </header>
    </>
  )
}