import React, { useEffect, useState } from "react";
import "./Locations.css";
import LocationsContainer from "./LocationsContainer";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const getLocations = () => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button id="show-button" onClick={() => {setShowMore(!showMore);}}>
        {!showMore ? "Show Locations" : "Hide Locations"}
      </button>
      <p> {showMore ? <LocationsContainer setLocations={setLocations} locations={locations}/> : null}</p>
      
    </div>
  );
}

export default Locations;
