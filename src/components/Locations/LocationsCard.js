import React from "react";

const LocationsCard = ({ location }) => {
  return (
    <div>
      <li>Name: {location.name}</li>
      <li>Terrain: {location.terrain}</li>
      <li>Climate: {location.climate}</li>
    </div>
  );
};

export default LocationsCard;
