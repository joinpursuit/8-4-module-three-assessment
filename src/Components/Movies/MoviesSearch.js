import React, {useState, useEffect} from 'react'

export default function MovieSearch() {

const [movies, setMovies] = useState([])

useEffect(()=>{
  fetch(
    "https://ghibliapi.herokuapp.com/films"
  )
  .then((response) => response.json())
  .then((data) => setMovies(data))
})

  return (
    <div>
      
      <select>
        <option></option>
        {movies.map(movie =>{
          return (
            <option key={movie.title} value={movie.title}>{movie.title}</option>
          )
        })}
      </select>
    </div>
  )
}
