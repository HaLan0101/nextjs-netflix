import React from 'react';
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = ({ type }) => {
    return (
        <nav className='hero__main'>
            <img src="https://wallpaperaccess.com/full/481127.jpg" alt="" />
            <div className='hero__content'>
            {type && (
                <div className="hero__filter">
                <span>{type === "film" ? "Films" : "Séries"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
                </div>
            )}
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
