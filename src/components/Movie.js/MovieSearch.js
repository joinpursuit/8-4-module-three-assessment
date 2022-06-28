import React from 'react'

export default function MovieSearch(films, change) {
    const selectedFilms = films.find((film) => (film.id === change))
    console.log(films)
  
    if (!change) {
     return (
      <div>
        <p>Please Select a movie</p>
      </div>
      )
    }
  
  return (
    <div>
      <h1> Title {selectedFilms.title}</h1>
      <p> Release Date {selectedFilms.release_date}</p>
      <p> Description {selectedFilms.description}</p>
  
  
    </div>
  )
}