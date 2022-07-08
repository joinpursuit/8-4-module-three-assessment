// import e from 'express';
import MovieInfo from "./MovieInfo";
import React from "react";
import { useState, useEffect } from "react";

const mov = {
  color: "black",
  fontSize: "30px",
  textAlign: "center",
};
const fom = {
  textAlign: "center",
};
const drop = {
  // width:"150px"Movies
};
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);
  const  handleSubmit = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  }
  return (
    <div className="movies">
      <p style={mov}>Select a Movie</p>
      <form style={fom}>
        <select onChange={handleSubmit} style={drop}>
          <option></option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        <MovieInfo movies={movies} option={option} />
      </form>
    </div>
  );
}
