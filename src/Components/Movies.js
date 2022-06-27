import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
function Movies() {
  const [films, setFilms] = useState([]);// For my data via Api
  const [title, setTitle] = useState("");// Use to click title and populate 

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);
  
  const showFilm = films.find((film) => film.title === title)
  
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="movies">
      <label>
        Select a Movie
        <select value={title} onChange={handleChange}>
          <option value=""></option>
          {films.map((film) => {
            return (
              <option value={film.title} key={film.id}>
                <h3>{film.title}</h3>
              </option>
            );
          })}
        </select>
      </label>
        {showFilm ? <MovieCard showFilm = {showFilm}/> : null}
    </div>
  );
}

export default Movies;
