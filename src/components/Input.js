import React from 'react';

const Input = (props) => {
    return (
        <div className='form__group' >
            <input type={props.type}
            id={props.id}
            name={props.name}
            onChange={props.handleChange}
            required={props.required}
            placeholder={props.placeholder}
            className={props.classes}
            value={props.value}
            />
        </div>
    );
}

export default Input;