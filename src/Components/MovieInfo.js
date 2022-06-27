import React from 'react';
// import './MovieInfo.css';
export default function MovieInfo({option, movies}) {
    const movieOption = movies.find((movie) => movie.id ===option)
    if (!option) {
        return (
        <div>
            <p>Select a Movie to Continue</p>
        </div>
        )
    }
  return (
    <div className='movinfo'>
      <p><b>Title</b>: {movieOption.title}</p>
      <p><b>ReleaseDate</b>: {movieOption.release_date}</p>
      <p><b>Description</b>: {movieOption.description}</p>
    </div>
  )
}