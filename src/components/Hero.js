import React from 'react';
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
    return (
        <nav className='hero__main'>
            <img src="https://wallpaperaccess.com/full/481127.jpg" alt="" />
            <div className='hero__content'>
                <div className='hero__filter'>
                    <form action="">
                        <label>Films</label>
                        <select name="films" id="films">
                            <option value="action">Action</option>
                            <option value="anime">Anime</option>
                            <option value="comedies">Comedies</option>
                            <option value="documentaires">Documentaires</option>
                        </select>
                    </form>
                </div>
                <img src="https://occ-0-2996-56.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSZJbzBdEmq7Yp4jL3GceIF3MYJDxrgm41Ga1BGyUsXoD3ZYGj4xuUXA2AELBRt5PPsO-hSy4vZCS5rLXQupDzDVOpcnmG2Vbqmj.webp?r=13d" alt=""/>
                <div className='hero__button'>
                    <div className='hero__button__play'>
                        <FontAwesomeIcon className='icon__play' icon="play"/>
                        <Button type="button" classes="btn btn__color-white" title="Lecture"></Button>
                    </div>
                    <div className='hero__button__info'>
                        <FontAwesomeIcon className='icon__info' icon="info"/>
                        <Button type="button" classes="btn btn__color-grey" title="Plus d'Infos"></Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Hero;
