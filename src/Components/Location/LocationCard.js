import React from "react";
import "./Locations.css";

function LocationCard(location) {
  return (
    <div className="location-display">
      <li>
        <p>Name: {location.name}</p>
        <p>Climate: {location.climate}</p>
        <p>Terrain: {location.terrain}</p>
      </li>
    </div>
  );
}

export default LocationCard;
