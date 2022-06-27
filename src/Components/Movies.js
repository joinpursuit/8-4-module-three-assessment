import React from "react";
import { useEffect, useState } from "react";
import { getAllMovies } from "../API/fetch";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [option, setOptions] = useState("");

  useEffect(() => {
    getAllMovies().then((movies) => setFilms(movies));
  }, []);

  const foundFilm = films.find((film) => film.title === option);

  return (
    <div className="movies">
      <label>
        <h1>Select A Movie</h1>
        <select value={option} onChange={(e) => setOptions(e.target.value)}>
          <option>empty</option>
          {films.map((film) => {
            return (
              <option value={film.title} key={film.id}>
                {film.title}
              </option>
            );
          })}
        </select>
      </label>
      <div>
        {foundFilm ? <MovieCard foundFilm={foundFilm}/> : null}
      </div>
    </div>
  );
}
