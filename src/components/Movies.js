import React from "react";
import { useEffect } from "react";
import "./Movies.css";

export default function Movies({ movie, setMovie }) {

    // const [click, setClick] = useState(false)

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => {
        // console.log(films)
        setMovie(films)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [setMovie]);

  const handleChange = (e) => {
    e.preventDefault()
  }

//   const handleClick = (e) => {
//     e.preventDefault()
//     click ? setClick(false) : setClick(true)
//   }

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <form>
        <select onChange={ handleChange }>
            <option></option>
            {movie.map((mov) => {
                return (
                    <option>{mov.title}</option>
                )
            })}
        </select>
      </form>
    </div>
  );
}


//  {/* {movie.map((mov) => {
//             return (
//                 <div>
//                 <h1>Title: {mov.title}</h1>
//                 <h3>Release Date: {mov.release_date}</h3>
//                 <h3>Description: {mov.description}</h3>
//                 </div>
//             );
//         })} */}