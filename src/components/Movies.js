import React from "react";
import { useEffect, useState } from "react";
import "./Movies.css";

export default function Movies() {

  const [movie, setMovie] = useState([])
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => {
        // console.log(films)
        setMovie(films);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMovie]);

  const handleChange = (e) => {
    const id = e.target.value
    const film = movie.find((mov) => mov.id === id) || {};
    // console.log(film)
    setSelected(film)
  };

  const movieDescription = selected.id ? (
    <div>
      <h2> Title: { selected.title }</h2>
      <h3>Release Date: { selected.release_date }</h3>
      <p> <span>Description:</span> { selected.description }</p>
    </div>
  ) : null;

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <form>
        <select onChange={handleChange}>
          <option></option>
          {movie.map(({title, id}, index) => {
            return <option key={ `film-${index}`} value={ id }>{ title }</option>;
          })}
        </select>
        <section>{ movieDescription }</section>
      </form>
    </div>
  );
}
