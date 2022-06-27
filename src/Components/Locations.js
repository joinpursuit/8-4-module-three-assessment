import "./Locations.css";
import { useState, useEffect } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/`)
      .then((response) => response.json())
      .then((data) => setLocations(data));
  });

  const handleClick = (e) => {
    (e.target.innerText === "Show Locations")
      ? (e.target.innerText = "Hide Locations")
      : (e.target.innerText = "Show Locations")
    /*locations.map((location) => (    
      <li>
        <p>Name: {location.name}</p>
        <p>Climate:{location.climate}</p>
        <p>Terrain: {location.terrain}</p>
      </li>
    ))*/
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
