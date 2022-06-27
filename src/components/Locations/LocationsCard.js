import React from "react";

const LocationsCard = ({ location }) => {
  // console.log(location)
  return (
    <div>
      <li>
        <p>Name: {location.name}</p>
        <p>Climate: {location.climate}</p>
        <p>Terrain: {location.terrain}</p>
      </li>
    </div>
  );
};

export default LocationsCard;
