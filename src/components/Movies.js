import React, { useEffect, useState } from "react";
import "./Movies.css"


export default function Movies({allMovies, setAllMovies}) {
 
  const [id, setid] = useState("");
  const [currentSelectedMovie, setCurrentSelectedMovie] = useState([]);
  

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentSelectedMovie(data)
        // console.log(allMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);




const handleChange = (e) => {
  const {value, key} = e.target
  setid(value)

}

const movieInfo = (e) => {
if (id) {
  return (
    <div className="infoBox">
    <p id="title"><strong>Title:</strong> {currentSelectedMovie.title}</p> 
    <p><strong>Release Data:</strong> {currentSelectedMovie.release_date}</p> 
    <p><strong>Description:</strong> {currentSelectedMovie.description}</p> 
    </div>
  )
}
}


  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={handleChange} key="" defaultValue="" name="Movie" id="Movie">
        <option key="" value="" >
          Pick a Movie
        </option>
        {allMovies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
  {/* {id} */}
{movieInfo()}





    </div>
  );
}
