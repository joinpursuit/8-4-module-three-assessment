import React from 'react'
import { useEffect, useState } from "react"


function Movies() {
    let [films, setFilms] = useState([])
    let [filmSelection, setfilmSelection] = useState({})
    let [filmSelector, setfilmSelector] = useState(false)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((data) => data.json())
            .then((films) => setFilms(films))
            .catch((error) => console.log(error));
    }, []);

    const selectFilm = (event) => {
        filmSelection = films.find((films) => films.id === event.target.value);
        console.log(filmSelection);
        setfilmSelection(filmSelection);
        setfilmSelector(true);
    }
    console.log(filmSelection);
    return (
        <div className="movies">
            <div className="hometitle">
                <h2>Select a Movies</h2>
                <select onChange={(event) => selectFilm(event)}>
                  <option></option> 
                    {films.map((film) => (<option key={film.id} value={film.id}> {film.title}</option> ))}
                </select>
            </div>
            {filmSelector &&  (<div>
                    <h2>Movie Title:{filmSelection.title}</h2>
                    <h3>Movie ReleaseDate:{filmSelection.release_date}</h3>
                    <h4>Movie Description:{filmSelection.description}</h4>
            </div>)}
    </div>
    )
}
export default Movies