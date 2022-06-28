import "./Locations.css";
import { useState, useEffect } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/`)
      .then((response) => response.json())
      .then((data) => setLocations(data));
  });

  const handleClick = (event) => {
    (event.target.innerText === "Show Locations")
      ? (event.target.innerText = "Hide Locations")
      : (event.target.innerText = "Show Locations")
  };

  return (
    <section className="locations">
        <div >
      <h2>List of Locations</h2>
      <button
        id = "btn"
        onClick={handleClick
        }>
        Show Locations
      </button>
      </div>
      {
            locations.map((location) => ( 
              <li key={location.id}>
                <p>Name: {location.name}</p>
                <p>Climate:{location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </li>
             
    ))}
    </section>
  );
}