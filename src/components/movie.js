import React from "react";

import { Card } from "react-bootstrap";

export const Movie = ({movie, ogTitle, director, releaseDate, runningTime, description}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{movie}</Card.Title>
          <Card.Subtitle>{ogTitle}</Card.Subtitle>
          <Card.Subtitle>Directed by: {director}</Card.Subtitle>
          <Card.Subtitle>Released : {releaseDate}</Card.Subtitle>
          <Card.Subtitle>Running Time: {runningTime}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  );
};
