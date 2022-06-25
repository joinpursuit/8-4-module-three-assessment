import React from "react";
import { Card } from "react-bootstrap";


const LocationCard = (props) => {
  //   return (
  //     <>
  //       <ul>
  //         <li>
  //           <strong>Name : </strong>
  //           {props.name}
  //         </li>
  //         <li>
  //           <strong>Climate : </strong>
  //           {props.climate}
  //         </li>
  //         <li>
  //           <strong>Terrain :</strong> {props.terrain}
  //         </li>
  //       </ul>
  //     </>
  //   );
  // };

  return (
    <Card style={{ width: "18rem" }}>
      <ul>
        <li>
          <Card.Body>
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
