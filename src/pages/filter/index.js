import React from 'react';
import { useEffect, useState } from "react";
import { useRef} from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import filmService from "../../services/film.service";
const Index = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();
    const handleValue = (value) => {
        getData(value);
    };
    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    }; 
    const [movies, setMovies] = useState();
    const getData = (id) => {
        if(id){
            filmService.getGenres(id)
            .then((data) => {
            console.log(data.results);
            setMovies(data.results);
            })
            .catch(err=>console.log(err))  
        }  
    };
    return (
        <>
        <Header></Header>
        <body className="film__home">
        <Hero></Hero>
        <div className="hero__filter">
            <select name="genre" id="genre" onChange={(e)=> handleValue(e.target.value) }>
                <option>Genre</option>
                <option value="28" >Action</option>
                <option value="35" >Comedy</option>
                <option value="10751">Family</option>
                <option value="878" >Science Fiction</option>
                <option value="14" >Fantasy</option>
                <option value="16" >Animation</option>
                <option value="80" >Crime</option>
                <option value="12" >Adventure</option>
            </select>
        </div>
        {movies ? (
            <>
            <div className='mylist'>
                <div className='list'>
                    <span className='listTitle'>Filter genre</span>
                    <div className="wrapper">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
                        <div className="container" ref={listRef}>
                            {movies.map((movie,index) => (
                                <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <img className='image' src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                                    {isHovered && (
                                    <>
                                    <div className="itemInfo">
                                        <div className="icons">
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-chevron-down"/>
                                        </div>
                                        <div className='itemTitle'>{movie.title}</div>
                                        <div className="itemInfoTop">
                                            <span className='itemInfoRecommand'>Recommandé à 98%</span>
                                            <span className="limit">+16</span>
                                            <span>{movie.release_date}</span>
                                        </div>
                                        <div className="desc">
                                        {movie.overview.substring(0, 130)}...
                                        </div>
                                        <div className="genre">Action</div>
                                    </div>
                                    </>
                                    )}
                                </div>
                            ))}
                        </div>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="sliderArrow right" onClick={() => handleClick("right")} />
                    </div>
                </div>
            </div>
            </>
          ) : (
            ""
          )}
        </body>
        </>
    );
}

export default Index;
