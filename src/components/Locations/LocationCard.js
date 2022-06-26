import React from "react";
import "./LocationCard.css";

export default function LocationCard({ sortedPeople, location }) {
  const { name, climate, terrain } = location;

  if (sortedPeople) {
    return (
      <ul className="location-card-ul">
        <li className="location-card-li" key={location.id}>
          <span>
            <strong>Name: </strong>
            <span>{name}</span>
          </span>
        </li>
        <li className="location-card-li">
          <span>
            <strong>Climate: </strong>
            <span>{climate}</span>
          </span>
        </li>

        <li className="location-card-li">
          <span>
            <strong>Terrain: </strong>
            {terrain}
          </span>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="location-card-ul">
        <li className="location-card-li" key={location.id}>
          <span>
            <strong>Name: </strong>
            <span>{name}</span>
          </span>
        </li>
        <li className="location-card-li">
          <span>
            <strong>Climate: </strong>
            <span>{climate}</span>
          </span>
        </li>

        <li className="location-card-li">
          <span>
            <strong>Terrain: </strong>
            {terrain}
          </span>
        </li>
      </ul>
    );
  }
}
