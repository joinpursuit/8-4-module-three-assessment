import React from 'react';
import "./Movies.css";

function MovieCard({ option, movies }) {
  const selectedMovie = movies.find((movie) => movie.id === option)
   
    if(!option){
      return (
        <div className="movie-input">
          <p>Please make a movie selection</p>
        </div>
      )
    }
  return (
    <div className="movie-details">
      <h1>Title: {selectedMovie.title}</h1>
      <p>
      <span className="label">Release Date: </span>
      <span className="result"> {selectedMovie.release_date} </span>
      </p>
      <p>
      <span className="label">Description: </span>
      <span className="result"> {selectedMovie.description} </span>
      </p>

    </div>
  )
}

export default MovieCard;