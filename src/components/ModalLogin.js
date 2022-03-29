import React from 'react';

const Modallogin = (props) => {
    return (
        <>
            {props.isActive ? (
                <>
                    <div className="overlay" onClick={props.closeFunction}></div>
                    <div className="modal">
                        <div className="modal__header">
                            <div className="close__cross" onClick={props.closeFunction}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="modal__title">
                            <h2>{props.title}</h2>
                        </div>
                        <div className="modal__content">{props.children}</div>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
}

export default Modallogin;
