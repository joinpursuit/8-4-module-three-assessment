import React from "react";
import { useEffect } from "react";
import "./Movies.css";

export default function Movies({ movie, setMovie }) {

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <form>
        <select></select>
      </form>
    </div>
  );
}


//Will need a forEach method in the return
//Title (title) , Release Date (release_date), and Description (description)