import React,{ useState, useEffect } from 'react';
import MoviesPage from './MoviesPage';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then((res) => res.json())
    .then((data) => setFilms(data))
    .catch((error) => console.log(error));
  },[])

  const handleSelect = (event) => {
    event.preventDefault();
    setChange(event.target.value);
  }


  return (
    <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={handleSelect}>
          <option></option>
          {films.map((film) => (
            <option value={film.id} key={film.id}>{film.title}</option>
          ))}
        </select>
        <MoviesPage films={films} change={change}/>
    </div>
  )
}

export default Movies;