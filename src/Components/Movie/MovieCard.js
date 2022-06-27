import React from 'react';
import "./MovieCard.css";

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
      <p><strong>Release Date: </strong>{selectedMovie.release_date}</p>
      <p><strong>Description: </strong>{selectedMovie.description}</p>
    </div>
  )
}

export default MovieCard;