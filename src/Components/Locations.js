import React, { useEffect, useState } from "react";
import "./Locations.css";
// import LocationsContainer where the fetched locations will be displayed
import LocationsContainer from "./LocationsContainer";

function Locations() {

  // create useState for locations list set to emy array 
  // create useState for show or hide locations true - Show Button
  const [locations, setLocations] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [showBttn, setShowBttn] = useState(true);



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

  const handleClick = () => {
    showMore ? setShowMore(false) : setShowMore(true);
    showBttn ? setShowBttn(false) : setShowBttn(true);
  };

  return (
    <div>
      <h1 className="locations">List of Locations</h1>
      {/* if the show button has not been clicked display hide locations */}
      <button id="show-button" onClick={handleClick}>
      {showBttn ? "Show Locations" : "Hide Locations"}
      </button>
      {/* if show button is clicked display locations to the LocationsContainer Component */}
      <p> {showMore ? locations.map((location) => <LocationsContainer location={location} />)
        : null}</p>
    </div>
  );
}

export default Locations;