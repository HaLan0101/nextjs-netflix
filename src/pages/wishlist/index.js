import React from 'react';
import { useEffect, useState } from "react";
import { useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
const Index = () => {
    const [isHovered, setIsHovered] = useState(false);
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
    const [list, setList] = useState();
    
    useEffect(() => {
        setList(JSON.parse(localStorage.getItem("list")) || []);
    }, []);
    return (
        <>
        <Header></Header>
          {list ? (
            <>
            <div className='mylist'>
                <div className='list'>
                    <span className='listTitle'>Ma liste</span>
                    <div className="wrapper">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}/>
                        <div className="container" ref={listRef}>
                            {list.map((listItem,index) => (
                                <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <img className='image' src={`http://image.tmdb.org/t/p/original${listItem.backdrop_path}`} alt="" />
                                    {isHovered && (
                                    <>
                                    <div className="itemInfo">
                                        <div className="icons">
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                                            <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-chevron-down"/>
                                        </div>
                                        <div className='itemTitle'>{listItem.title}</div>
                                        <div className="itemInfoTop">
                                            <span className='itemInfoRecommand'>Recommandé à 98%</span>
                                            <span className="limit">+16</span>
                                            <span>{listItem.release_date}</span>
                                        </div>
                                        <div className="desc">
                                        {listItem.overview.substring(0, 130)}...
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
            <p>Votre wishlist est vide</p>
          )}
        </>
    );
}

export default Index;
