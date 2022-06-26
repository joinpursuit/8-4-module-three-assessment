import React from "react";

import { Card } from "react-bootstrap";

import "./movie.css";

export const Movie = ({
  movie,
  ogTitle,
  director,
  releaseDate,
  runningTime,
  description,
  ogTitleRoman,
}) => {
  return (
    <div>
      <Card className="text-center" border="primary">
        <Card.Header>
          {ogTitle} ({ogTitleRoman})
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h1>{movie}</h1>
          </Card.Title>
          <div id="drr">
            <Card.Subtitle>Directed by: {director}</Card.Subtitle>
            <Card.Subtitle>Released : {releaseDate}</Card.Subtitle>
            <Card.Subtitle>Running Time: {runningTime}</Card.Subtitle>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
