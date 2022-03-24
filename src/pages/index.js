import LogoNetFlix from "../public/LogoNetFlix.png";
import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";
export default function Home() {
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
            <Button type="button" classes="btn btn__color-black" title="Français">
            </Button>
            </li>
            <li className='nav__item'>
              <Link href="/login">
                <Button type="button" classes="btn btn__color-red" title="S'identifier"></Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="home__below">
        <h1>Films, séries TV et bien plus en illimité.</h1>
        <h2>Où que vous soyez. Annulez à tout moment.</h2>
        <form action="">
          <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
          <div className="home__form">
          <Input
          name="email"
          id="email"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Adresse e-mail"
          ></Input>
          <Button type="button" classes="btn btn__color-red" title="Commencer >"></Button>
          </div>
        </form>
      </div>
    </header>
    </>
  )
}