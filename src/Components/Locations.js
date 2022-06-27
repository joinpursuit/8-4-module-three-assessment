import React, { useEffect, useState } from "react";
import "./Locations.css";
import LocationsContainer from "./LocationsContainer";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showMore, setShowMore] = useState(true);

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
    <div>
      <h1>List of Locations</h1>
      <button id="show-button" onClick={() => {setShowMore(!showMore);}}>
        {!showMore ? "HIDE LOCATIONS" : "SHOW LOCATIONS"}
      </button>
      <p> {!showMore ? <LocationsContainer locations={locations}/> : null}</p>
      
    </div>
  );
}

export default Locations;