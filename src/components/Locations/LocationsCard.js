import React from "react";
import "./Locations.css";

const LocationsCard = ({ location }) => {
  // console.log(location)
  return (
    <div>
      <li className="list-out">
        <p>Name: {location.name}</p>
        <p>Climate: {location.climate}</p>
        <p>Terrain: {location.terrain}</p>
      </li>
    </div>
  );
};

export default LocationsCard;
