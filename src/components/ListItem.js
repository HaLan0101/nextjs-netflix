import React from 'react';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../components/Modal";
const Listitem = ({index,film}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const [showModal,setShowModal]= useState(false);
    return (
        <>
        <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={`http://image.tmdb.org/t/p/original${film.backdrop_path}`} alt="" />
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-plus" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-chevron-down" onClick={()=> setShowModal(true)} />
                </div>
                <div className='itemTitle'>{film.title}</div>
                <div className="itemInfoTop">
                    <span className='itemInfoRecommand'>Recommandé à 98% {film.id}</span>
                    <span className="limit">+16</span>
                    <span>1 h 54 min</span>
                </div>
                <div className="desc">
                {film.overview.substring(0, 130)}...
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}
        </div>
        <Modal isActive={showModal} closeFunction={()=>setShowModal(!showModal)} desc={film.overview} img={`http://image.tmdb.org/t/p/original${film.backdrop_path}`}></Modal>
        </>
    );
}

export default Listitem;
