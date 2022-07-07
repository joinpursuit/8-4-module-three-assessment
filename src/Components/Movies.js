import React, { useState, useEffect } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState[{ id: null }];

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then((movieData) => movieData.json())
    .then((movies) => setMovies(movies));
  }, []);

    const handleChange = (e) => {
      const id = e.target.value;
      const selected = movies.find((movie) => movie.id === id);
      setSelectedMovie(selected);

  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>Select A Movie</option>
       {movies.map((movies) => (
        <option value={movies.id} key={movies.id}>{movies.title}</option>
       ))}  
      </select>
      {!selectedMovie.id ? (
         <p>no movie selected</p>
         ) : ( 
          <aside>
            <p> Title : {selectedMovie.title} </p>
            <p> Description : {selectedMovie.desciption} </p>
            <p> Release Date : {setSelectedMovie.release_date}</p>
          </aside>
  )}
   </div>
  );
}




