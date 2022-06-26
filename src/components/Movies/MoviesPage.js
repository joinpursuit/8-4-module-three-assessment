import React from 'react';
import "./Movies.css"

const MoviesPage = ({ films, change }) => {

  const selectedFilms = films.find((film) => (film.id === change))
  console.log(films)
    
  if (!change) {
   return (
    <div className='no-show'>
      <p>Please Select a movie</p>
    </div>
    )
  }
  
return (
  <div className='movies-display'>
    <h1> <strong>Title:</strong> {selectedFilms.title}</h1>
    <h4> <strong>Release Date:</strong> {selectedFilms.release_date}</h4>
    <p> <strong>Description:</strong> {selectedFilms.description}</p>

    
  </div>
)
  
}

export default MoviesPage;

// should also navigate to the movies page(/movies)
// has a select drop down that includes and all movies produced by studio ghibli
// when fetch is done and an option is selected from the dropdown => the movie's title (heading), releaseDate and description should appear under the dropdown 
// when the empty option is selected the film's information should disappear