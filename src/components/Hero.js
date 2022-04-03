import React from 'react';
import Button from "../components/Button";
import { useEffect, useState } from "react";
import filmService from "../services/film.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const id = Math.random() * (22 - 11 + 1) + 11;
        filmService.getMovie(id)
        .then((data) => {
        console.log(data);
        setMovie(data);
        })
        .catch(err=>console.log(err))     
    },[]);
    return (
        <>
        {movie ? (
            <>
        <nav className='hero__main'>
            <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
            <div className='hero__content'>
                <h1>{movie.title}</h1>
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
        </>
          ) : (
            ""
          )}
        </>
    );
}

export default Hero;
