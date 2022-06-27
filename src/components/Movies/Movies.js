import React, { useEffect, useState } from "react";
import "./Movies.css";

const Movies = ({ allMovies, setAllMovies }) => {
  const [id, setid] = useState("");
  const [CurrentMovie, setCurrentMovie] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setid(value);
  };

  const movieInfo = (e) => {
    if (id) {
      return (
        <div className="moviesinfo">
          <p className="header" id="title">
            <strong>Title:</strong> {CurrentMovie.title}{" "}
          </p>
          <p>
            <strong>Release Date:</strong> {CurrentMovie.release_date}
          </p>
          <p>
            <strong>Description:</strong> {CurrentMovie.description}
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
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      {movieInfo()}
    </div>
  );
};

export default Movies;
