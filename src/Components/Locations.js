import React, { useEffect, useState } from "react";
import "./Locations.css";
// import LocationsContainer where the fetched locations will be displayed
import LocationsContainer from "./LocationsContainer";

function Locations() {

  // create useState for locations list set to emy array 
  // create useState for show more infor set to true - Show Button
  const [locations, setLocations] = useState([]);
  const [showMore, setShowMore] = useState(true);


    // fetch locations data from ghibliapi and set returned data to updated useState locations list - setLocations - w/ catch for any 404 errors

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
      {/* if the show button has not been clicked display hide locations */}
      <button id="show-button" onClick={() => {setShowMore(!showMore);}}>
        {!showMore ? "HIDE LOCATIONS" : "SHOW LOCATIONS"}
      </button>
      {/* if show button is clicked display locations to the LocationsContainer Component */}
      <p> {!showMore ? <LocationsContainer locations={locations}/> : null}</p>
      
    </div>
  );
}

export default Locations;