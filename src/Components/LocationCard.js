import React from "react";

export default function LocationCard({ location }) {
  return (
    <ul className="locations">
      <ul>
        <li>
          <span>Name: {location.name} </span>
          <span>Climate: {location.climate} </span>
          <span>Terrain: {location.terrain} </span>
        </li>
      </ul>
    </ul>
  );
}
