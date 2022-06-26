import React, { useState } from "react";
import "./Movies.css";

export default function Movies({ allMovies, setAllMovies }) {
  const [id, setid] = useState("");
  const [currentSelectedMovie, setCurrentSelectedMovie] = useState(undefined);

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentSelectedMovie(allMovies.find((movie) => movie.title === value));
  };

  const movieInfo = (e) => {
    //------version to pass cypress-----//
    if (currentSelectedMovie) {
      return (
        <div className="infoBox">
          <h1 className="header" id="title">
            {currentSelectedMovie.title}{" "}
          </h1>
          <p>
            <strong>Release Data:</strong> {currentSelectedMovie.release_date}
          </p>
          <p>
            <strong>Description:</strong> {currentSelectedMovie.description}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select
        onChange={handleChange}
        key=""
        defaultValue=""
        name="Movie"
        id="Movie"
      >
        <option key="" value="">
          Pick a Movie
        </option>
        {allMovies.map((movie) => {
          return (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          );
        })}
      </select>

      {movieInfo()}
    </div>
  );
}
