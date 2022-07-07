import React from 'react'


// with the  movies list and selected movie option added to MovieCard component as props 
function MovieCard({ option, movies }) {

  // display the selected movie from the movies list where the movie title is the same as selected movie option 
  const selectedMovie = movies.find((movie) => movie.id === option)
   

  // if NO selected movie option return a message "Please make a movie selection"
    if(!option){
      return (
        <div>
          <p>Please make a movie selection</p>
        </div>
      )
    }

    // else return that selected movie title, movie release date and movie description
  return (
    <div>
      <h1>Title: {selectedMovie.title}</h1>
      <p><strong>Release Date: </strong>{selectedMovie.release_date}</p>
      <p><strong>Description: </strong>{selectedMovie.description}</p>
    </div>
  )
}

export default MovieCard