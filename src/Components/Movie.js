import React from 'react'
import { useEffect, useState } from 'react'

export default function Movie({movieId}) {

const [movie, setMovie] = useState("")

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${movieId}`)
          .then((response) => response.json())
          .then((response) => {
            setMovie(response)
          });
      }, [movieId]);

  return (
    <div className='movie'> 
        <section>
            <h2>Title: {movie.title}</h2>
            <h3>Release Date: {movie.release_date}</h3>
            <h4>Description: {movie.description}</h4>
        </section>
    </div>
  )
}
