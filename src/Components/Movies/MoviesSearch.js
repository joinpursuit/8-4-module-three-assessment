import React, {useState, useEffect} from 'react'

export default function MovieSearch() {

const [movies, setMovies] = useState([])
const [select, setSelect] = useState("")
const [movieInfo, setMovieInfo] = useState("")

useEffect(()=>{
  fetch(
    "https://ghibliapi.herokuapp.com/films"
  )
  .then((response) => response.json())
  .then((data) => setMovies(data))
}, [])

const handleSelect = (event) => {
  event.preventDefault()
  const {value} = event.target
  setSelect(value)
}

  return (
    <div>
      <h2>Select a Movie</h2>
      <select onChange={handleSelect} value={select}>
        <option></option>
        {movies.map(movie =>{
          return (
            <option key={movie.title} value={movie.title}>{movie.title}</option>
          )
        })}
      </select>
      <p>
     { 
  movies.map(movie => {
    if(movie.title === select){
      return (
        <div>
       <h2>Title: {movie.title}</h2>
       <h4>Release Date: {movie["release_date"]}</h4>
       <h4>Description: {movie.description}</h4>

        </div>
      )
    }
  })
}
      </p>
    </div>
  )
}
