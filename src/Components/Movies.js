import React, { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [movieId, setMovieId] = useState([])

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((response) => {
        setMoviesData(response);
      });
  }, []);

  const showMovie = (e) => {
    setMovieId(e.target.value)
  }


  return (
    <div className="movies">
        <section className="selectMovie">
            <h2>Select A Movie</h2>
            {console.log(moviesData)}
            <select onChange = {showMovie} name="titles" id="titles">
                <option></option>
                {moviesData.map((movie)=>{
                   return <option value = {movie.id}>{movie.title}</option>
                })}
            </select>
        </section>
        {movieId.length > 1? (<section className="movieInfo">
                <Movie movieId = {movieId}/>
        </section>) : (
            <p>Pick Something!</p>
        )}
        
    </div>
  );
}
