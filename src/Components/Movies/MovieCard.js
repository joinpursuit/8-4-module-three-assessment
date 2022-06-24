import React from 'react'

function MovieCard({ option, movies }) {
  const selectedMovie = movies.find((movie) => movie.id === option)
  console.log(selectedMovie)
  return (
    <div>
      <h1>Title:{selectedMovie.title}</h1>
      <p><strong>Release Date: </strong>{selectedMovie.release_date}</p>
      <p><strong>Description: </strong>{selectedMovie.description}</p>
    </div>
  )
}

export default MovieCard