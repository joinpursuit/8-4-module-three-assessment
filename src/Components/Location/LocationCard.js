import React from "react";
import "./Locations.css";

function LocationCard({location, sortBy}) {
  
    if (sortBy) {
      return (
        <div className="location-display">
          <ul>
            <li>
              <span className="label">Name: </span>
              <span className="result">{location.name}</span>
            </li>
            <li>
              <span className="label">Climate: </span>
              <span className="result">{location.climate}</span>
            </li>
            <li>
              <span className="label">Terrain: </span>
              <span className="result">{location.terrain}</span>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="location-display">
          <ul>
            <li>
              <span className="label">Name: </span>
              <span className="result">{location.name}</span>
            </li>
            <li>
              <span className="label">Climate: </span>
              <span className="result">{location.climate}</span>
            </li>
            <li>
              <span className="label">Terrain: </span>
              <span className="result">{location.terrain}</span>
            </li>
          </ul>
        </div>
      );
    }
  };
  
export default LocationCard;
