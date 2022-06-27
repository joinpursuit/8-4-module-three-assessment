import React from 'react'

function MovieCard({ showFilm }) {

    return (
        <div className="movieCard">
              <>
                <h1>Title: {showFilm.title}</h1>
                <h4> Release Date: {showFilm.release_date}</h4>
                <p><span style={{fontWeight: 'bold'}}>Description:</span> {showFilm.description}</p>
              </>
        </div>
      );
}

export default MovieCard