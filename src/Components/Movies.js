import { useState } from "react";
import "./Movies.css";


export default function Movies({ films }) {
  const [id, setId] = useState("");
  const selectedFilm = films.find((film) => film.id === id);
  return (
    <>
      <section className="main_movies">
        <h1>Select a Movie</h1>
        <select typeof="text" onChange={(event) => setId(event.target.value)}>
          <option value={""}> </option>
          {films.map((film) => {
            return (
              <option key={film.id} value={film.id}>
                {film.title}
              </option>
            );
          })}
        </select>
          {selectedFilm ? (
            <>
             <div className="movie_info">
               <h6> <strong>Title: </strong> {selectedFilm.title} </h6>
              <p><strong>Release Date: </strong>{selectedFilm.release_date}</p>
              <p><strong>Description: </strong>{selectedFilm.description}</p>
              </div>
            </>
          ) : (
            ""
          )}
      </section>
    </>
  );
}
