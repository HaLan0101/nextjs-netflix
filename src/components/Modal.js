import React from 'react';
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = (props) => {
    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal__header">
                    <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                    <h2>Hello</h2>
                    <div className='modal__button'>
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-plus" />
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
                        <div className='hero__button__play'>
                            <FontAwesomeIcon className='icon__play' icon="play"/>
                            <Button type="button" classes="btn btn__color-white" title="Lecture"></Button>
                        </div>
                    </div>
                    <div className='modal__content'>
                        <div className='content__left'>
                            <div className="itemInfoTop">
                                <span className='itemInfoRecommand'>Recommandé à 98%</span>
                                <span className='itemInfoDate'>2022</span>
                                <span className="limit">+16</span>
                                <span>1 h 54 min</span>
                            </div>
                            <div className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum repellat quidem quas. Autem hic cum odio voluptatum nulla quaerat consequuntur, molestiae non animi! Enim ipsam alias blanditiis earum asperiores?
                            </div>
                        </div>
                        <div className='content__right'>
                            <div className='content__distribution'>Yaya</div>
                            <div className='content__genre'>Action, Romain</div>
                        </div>
                    </div>
                </div>
                    
                <div className="modal__content">{props.children}</div>
            </div>
        </>
    );
}

export default Modal;
