import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = (props) => {
    return (
        <div>
            <div className="search__box" >
                <input className='search__input' type="text" placeholder="Titre......."/>
                <a className="search__btn" href='#'>
                    <FontAwesomeIcon icon="search"  onClick={props.active}/>
                </a>
            </div>
        </div>
    );
}

export default Search;
