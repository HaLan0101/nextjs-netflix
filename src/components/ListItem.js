import React from 'react';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modal";
const Listitem = ({index,film}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const [showModal,setShowModal]= useState(false);
    const addToList = (element) => { 
        const listArray = [];
        if (localStorage.getItem('list')) {
            const localStoragelist = JSON.parse(localStorage.getItem('list'));
            localStoragelist.forEach(film => {
                listArray.push(film);    
            });
            listArray.push(element);
            console.log(listArray);
            localStorage.setItem('list', JSON.stringify(listArray));
        }
        else {
            listArray.push(element);
            localStorage.setItem('list', JSON.stringify(listArray));
        }
    };
    return (
        <>
        <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className='image' src={`http://image.tmdb.org/t/p/original${film.backdrop_path}`} alt="" />
            <Modal isActive={showModal} id={film.id} closeFunction={()=>setShowModal(!showModal)} desc={film.overview} img={`http://image.tmdb.org/t/p/original${film.backdrop_path}`}></Modal>
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-plus"  onClick={()=> addToList(film) }/>
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-chevron-down" id={film.id} onClick={()=> setShowModal(true)} />
                </div>
                <div className='itemTitle'>{film.title}</div>
                <div className="itemInfoTop">
                    <span className='itemInfoRecommand'>Recommandé à 98%</span>
                    <span className="limit">+16</span>
                    <span>{film.release_date}</span>
                </div>
                <div className="desc">
                {film.overview.substring(0, 130)}...
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}
        </div>
        </>
    );
}

export default Listitem;
