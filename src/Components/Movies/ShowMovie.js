import React from 'react';
import './ShowMovie.css'

function ShowMovie({ pickedFilm }) {
    return (
        <div className='movie_shown' id={pickedFilm.length === 0 ? 'hidden' : 'show'}>
            <h2>Title: {pickedFilm.title}</h2>
            <h5>Release Date: {pickedFilm.release_date}</h5>
            <p><span>Description:</span> {pickedFilm.description}</p>
        </div>
    )
}

export default ShowMovie