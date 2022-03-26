import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Listitem = () => {
    return (
        <div className='listItem'>
            <img src="https://www.geekzone.fr/wp-content/uploads/2019/08/farfromhome_06.jpg" alt="" />
            <div className="itemInfo">
                <div className="icons">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
                <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-plus" />
                <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                </div>
                <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
                </div>
                <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
                </div>
                <div className="genre">Action</div>
            </div>
            </div>
    );
}

export default Listitem;
