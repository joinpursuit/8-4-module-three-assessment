import React, { useState, useEffect } from 'react'
import "./Movies.css"
import MovieCard from './MovieCard';


function Movies() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch(err => console.log(err))
  }, []);


  return (
    <div>
      <h1>Select a Movie</h1>
      <select>
        {movies.map(movie => <option>{movie.title}</option>)}
      </select>
    </div>
  )
}

export default Movies