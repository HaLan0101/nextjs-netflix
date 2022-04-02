import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = (props) => {
    return (
        <div>
            <div className="search__box" >
                <input className='search__input' type="text" placeholder={props.message} onChange={props.onChange} />
                <a className="search__btn" href='/search'>
                    <FontAwesomeIcon icon="search"/>
                </a>
            </div>
        </div>
    );
}

export default Search;
