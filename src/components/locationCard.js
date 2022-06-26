import React from "react";
import { Card } from "react-bootstrap";


const LocationCard = (props) => {

  return (
    <Card style={{ width: "18rem" }}>
      <ul>
        <li>
          <Card.Body key={props.name}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>Climate : {props.climate}</Card.Subtitle>
            <Card.Subtitle>Terrain: {props.terrain}</Card.Subtitle>
          </Card.Body>
        </li>
      </ul>
    </Card>
  );
};

export default LocationCard;
