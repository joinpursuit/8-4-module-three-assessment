import React from "react";
import "./LocationCard.css";

export default function LocationCard({ location }) {
  const { name, climate, terrain } = location;
//right now this only just return ALL of them -- I need to add a sort function to this

  return (
    <div className="location-card-div">
      <ul className="location-card-ul" >
        <li className="location-card-li" id={location.id} key={location.id}>
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
