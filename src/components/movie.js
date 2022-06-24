import React from "react";

export const Movie = ({movie, ogTitle, director, releaseDate, runningTime, description}) => {
  return (
    <div>
      <h2>{movie}</h2>
      <h3>Original title : {ogTitle}</h3>
      <h3>Directed by : {director}</h3>
      <h4>Relased : {releaseDate}</h4>
      <h4>Running Time : {runningTime} mins.</h4>
      <p>{description}</p>
    </div>
  );
};
