import React from 'react';
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = (props) => {
    return (
        <>
        {props.isActive ? (
                <>
            <div className='modal__container'>
                <div className="modal__overlay" onClick={props.closeFunction}></div>
                <div className="modal__modal">
                    <div className="modal__header">
                        <FontAwesomeIcon className='x' icon="fa-solid fa-circle-xmark" onClick={props.closeFunction} />
                        <img src={props.img} alt="" />
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
                                    {props.desc}
                                </div>
                            </div>
                            <div className='content__right'>
                                <div className='content__distribution'>Yaya</div>
                                <div className='content__genre'>Action</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            ) : (
                ""
            )}
        </>
    );
}

export default Modal;
