import React, { useState, useEffect } from 'react'
import "./Movies.css"
import MovieCard from './MovieCard';


function Movies() {

  const [movies, setMovies] = useState([])
  const [option, setOption] = useState("")
  console.log(option)

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch(err => console.log(err))
  }, [setOption]);

  const handleChange = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  return (
    <div className='movies'>
      <h1>Select a Movie</h1>
      <select onChange={handleChange}>
        <option value=""></option>
        {movies.map(movie => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
      </select>
      <MovieCard movies={movies} option={option}/>
    </div>
  )
}

export default Movies