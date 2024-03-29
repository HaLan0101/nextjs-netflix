import React from 'react';
import { useRef} from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filmService from "../services/film.service";
import ListItem from "../components/ListItem";
const List = (props) => {
    const [films, setFilms] = useState();
    useEffect(() => {
        if(props.title === "Movies"){
            filmService.getMovies()
          .then((data) => {
            console.log(data.results);
            setFilms(data.results);
          })
          .catch(err=>console.log(err))
        }
        if (props.title === "Populaire") {
            filmService.getPopular()
            .then((data) => {
              console.log(data.results);
              setFilms(data.results);
            })
            .catch(err=>console.log(err))
        } else{
            filmService.getUpcoming()
            .then((data) => {
              console.log(data.results);
              setFilms(data.results);
            })
            .catch(err=>console.log(err))
        }
      },[]);
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

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
    return (
        <>
            <div className='list'>
                <span className='listTitle'>{props.title}</span>
                <div className="wrapper">
                <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
                    <div className="container" ref={listRef}>
                    {films &&
                        films.map((film,i) => (
                            <ListItem index={i} film={film} key={film.id}></ListItem>
                    ))}
                    </div>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="sliderArrow right" onClick={() => handleClick("right")} />
                </div>
            </div>
        </>
    );
}

export default List;
