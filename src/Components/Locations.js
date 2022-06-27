import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
import "./Locations.css"

export default function Locations() {
  const [showButton, setShowButton] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleClick = () => {
    setShowButton(!showButton);
  };

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/`)
      .then((response) => response.json())
      .then((data) => setLocations(data));
  });

  const getLocations = () => {
    if (showButton) {
      return locations.map((location) => {
        return <LocationList location={location} key={location.id} />;
      });
    } 
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={handleClick}>
        {showButton ? "Hide Locations"
       : "Show Locations"}
      </button>
      {getLocations()}
    </div>
  );
}
