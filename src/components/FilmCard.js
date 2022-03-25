import React from 'react';

const Filmcard = (props) => {
    return (
        <>
            <div className='film__card'>
                <h2>{props.film.title}</h2>
                <img src={`http://image.tmdb.org/t/p/original${props.film.backdrop_path}`} alt="" />
            </div>
        </>
    );
}

export default Filmcard;
