import React from 'react';

const MoviesPage = ({ films, change }) => {

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
    <h1> <strong>Title:</strong> {selectedFilms.title}</h1>
    <p> <strong>Release Date:</strong> {selectedFilms.release_date}</p>
    <p> <strong>Description:</strong> {selectedFilms.description}</p>

    
  </div>
)
  
}

export default MoviesPage;

// should also navigate to the movies page(/movies)
// has a select drop down that includes and all movies produced by studio ghibli
// when fetch is done and an option is selected from the dropdown => the movie's title (heading), releaseDate and description should appear under the dropdown 
// when the empty option is selected the film's information should disappear