import LogoNetFlix from "../public/LogoNetFlix.png";
export default function Home() {
  return (
    <header className='header__main'>
      <div className='header__top'>
        <div className='header__logo'>
          <img src={LogoNetFlix.src} alt="netflix" />
        </div>
        <div className='header__nav'>
          <ul className='nav__list'>
            <li className='list__item'>
              <button>Languages</button>
            </li>
            <li className='list__item'>
              <button>S'indentifier</button>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </header>
  )
}