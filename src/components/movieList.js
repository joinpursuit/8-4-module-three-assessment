import React from "react";
import { useEffect, useState } from "react";

import { Movie } from "./movie";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setMovie] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleSelection = (e) => {
    //set selection to value of form
    const selection = e.target.value;

    //compare value to movies state to pull out relevant array
    const movieFound = movies.find((movie) => movie.title === selection);

    //set needed states
    setMovie(movieFound);
    setVisible(true);
  };

  //fetch on component load
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <h1>Select a movie</h1>
      <form onChange={handleSelection}>
        <select>
          <option value=""></option>
          {movies.map((movie) => {
            return (
              <option value={movie.title} key={movie.id}>
                {movie.title}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        {visible ? (
          <Movie
            movie={singleMovie.title}
            ogTitle={singleMovie.original_title}
            director={singleMovie.director}
            releaseDate={singleMovie.release_date}
            runningTime={singleMovie.running_time}
            description={singleMovie.description}
          />
        ) : null}
      </div>
    </>
  );
};
