import React from "react";

const LocationCard = (props) => {
  return (
    <>
      <ul>
        <li>
          <strong>Name : </strong>
          {props.name}
        </li>
        <li>
          <strong>Climate : </strong>
          {props.climate}
        </li>
        <li>
          <strong>Terrain :</strong> {props.terrain}
        </li>
      </ul>
    </>
  );
};

export default LocationCard;
