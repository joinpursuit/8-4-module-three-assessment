import React from "react";

function MovieCard({ film }) {
  const { title, description, release_date } = film;
  return (
    <article className="movie">
      <h1>Title: {title} </h1>
      <p>Release Date: {release_date}</p>
      <p>Description: {description} </p>
    </article>
  );
}

export default MovieCard;
