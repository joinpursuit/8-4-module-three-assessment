import { React, useState } from 'react';
import ShowMovie from './ShowMovie';

function MoviesIndex({ films }) {
    const [pickedFilm, setPickedFilm] = useState([])

    const selectedFilm = (e) => {
        const title = e.target.value
        if (title !== '') {
            setPickedFilm(films.find(i => i.title === title))
        } else {
            return setPickedFilm([])
        }
    }

    return (
        <div className='movies'>
            <h1>Movies</h1>
            <select onChange={selectedFilm}>
                <option value='' ></option>
                {films.map((film, i) => {
                    return (<option value={film.title} key={i + 1}>{film.title} </option>)
                })}
            </select>
            <br />
            <ShowMovie pickedFilm={pickedFilm} />
        </div>
    )
}

export default MoviesIndex