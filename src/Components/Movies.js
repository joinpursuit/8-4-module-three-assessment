import { React, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [films, setFilms] = useState([]);
  const [options, setOptions] = useState("");

  useEffect(() => {
    async function getMovies() {
      const res = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await res.json();
      setFilms(
        data.map(({ title, id, description, release_date }) => ({
          description: description,
          title: title,
          id: id,
          release_date: release_date,
        }))
      );
    }
    getMovies();
  }, []);

  const onChange = (e) => {
    setOptions(e.target.value);
  };

  const foundMovie = films.find((film) => film.title === options);
  console.log(options);

  return (
    <div className="movies">
      <label>
        Select a Movie
        <select value={options} onChange={onChange}>
          <option> Empty</option>
          {films.map(({ title, id }) => (
            <option value={title} key={id}>
              {title}
            </option>
          ))}
        </select>
      </label>
      <section className="movie-card">
        {foundMovie ? <MovieCard film={foundMovie} /> : null}
      </section>
    </div>
  );
}

export default Movies;
