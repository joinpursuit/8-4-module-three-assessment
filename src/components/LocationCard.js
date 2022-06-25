import React from "react";
import "./LocationCard.css";

export default function LocationCard({ location }) {
  const { name, climate, terrain } = location;

  return (
    <div>
      <ul>
        <li>
          <p>
            <strong>Name:</strong>
            {name}
          </p>
          <p>
            <strong>Climate:</strong>
            {climate}
          </p>
          <p>
            <strong>Terrain:</strong>
            {terrain}
          </p>
        </li>
      </ul>
    </div>
  );
}
