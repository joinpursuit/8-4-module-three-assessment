import React from "react";
import "./LocationList.css";
export default function LocationList ({location}) {
    
  const { name, climate, terrain } = location;

  return (
    <>
    
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
   
    </>
  );
}