import React from 'react'
import { useState, useEffect } from 'react'

const url="https://ghibliapi.herokuapp.com/films"


const Movies = () => {
  
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null)
 
    const fetchMovieData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data)
      
    } catch (err) {
      console.log(err)
    }
   
    }
  
  //  console.log(movies)
  
  useEffect(() => {
 fetchMovieData()
}, [])

  
  const selectMovie = (event) => {
    const movie = movies.find((movie) => movie.title === event.target.value)
    setMovie(movie)
}
  const movieItems = movies.map((movie) => { 

    return <option value={movie.title}>{movie.title}</option>

  })
  
  return (
    <div className="movies">
      <p>Select a Movie</p>
          <select id="movies" name="movies" onChange={selectMovie}>
            <option value="">Select a Movie</option>
            {movieItems}
          </select>
      
  
          <h1>{movie && movie.title}</h1>
          <p>{movie && movie.release_date}</p>
          <p>{movie && movie.description}</p>
      
   
    </div>
  );
}

export default Movies