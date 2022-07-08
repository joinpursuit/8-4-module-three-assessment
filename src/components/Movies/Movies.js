import React,{ useState, useEffect, Component } from 'react';
import MovieSearch from './MovieCard';

export default function MovieFind() {
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");

  
  

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then((res) => res.json())
    .then((data) => setFilms(data))
    .catch((error) => console.log(error));
  },[])

  const handleSelect = (event) => {
    event.preventDefault();
    const {value} = event.target
  setTitle(value)
  }


  return (
    <div className="movies">
        <h1>Select a Movie</h1>
        <select value={title}onChange={handleSelect}>
          <option value =""></option>
          {films.map((film) => {
            return (
            <option value={film.title} key={film.id}><h3>{film.title}</h3>
            </option>
            );
            })}
        </select>
        {/* {showFilm ? <MovieFind showFilm = {showFilms}/> : null} */}
    </div>
  )
            }

