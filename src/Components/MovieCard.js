import React from 'react'

export default function MovieCard({ foundFilm }) {
  return (
    <div>
      <img alt={foundFilm.title} src={foundFilm.image}/>
      <h2>Title: {foundFilm.title}</h2>
      <h3>Directed by: {foundFilm.director}</h3>
      <h4>Release Date: {foundFilm.release_date}</h4>
      <p><strong>Description:</strong> {foundFilm.description}</p>
    </div>
  )
}
