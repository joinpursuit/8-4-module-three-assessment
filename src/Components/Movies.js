import React, { useState, useEffect } from "react";
import "./Movies.css";
// import MovieCard Component created with Movies useState
import MovieCard from "./MovieCard";

function Movies() {

  // create useState for movie list set to empy array 
  // create useState for option choice to empty string - option element 
  const [movies, setMovies] = useState([]);
  const [option, setOption] = useState("");
  

  // fetch films data from ghibliapi and set returned data to updated useState movie list - setMovie - w/ catch for any 404 errors
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);


  // create EVENT on handleChange that wont refresh the page  - when updated useState option choice value changes - setOption 
  const handleChange = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      {/* handleChange EVENT will run on - select - onChange */}
      <select onChange={handleChange}>
        <option></option>
        {/* depending on the option chosen map through the movies list and display movie title  */}
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {/* add the movies list and selected movie to MovieCard Component */}
      <MovieCard movies={movies} option={option} />
    </div>
  );
}

export default Movies;