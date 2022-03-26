import React from 'react';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Listitem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://www.geekzone.fr/wp-content/uploads/2019/08/farfromhome_06.jpg" alt="" />
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-plus" />
                    <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                </div>
                <div className="itemInfoTop">
                    <span className='itemInfoRecommand'>Recommandé à 98%</span>
                    <span className="limit">+16</span>
                    <span>1 h 54 min</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}
            </div>
    );
}

export default Listitem;
