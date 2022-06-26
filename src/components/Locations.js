import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import "./Locations.css"


export default function Locations({ allLocations, setAllLocations }) {
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
    locationsInfo();
  };

  const locationsInfo = () => {
    if (buttonStatus) {
      return allLocations.map((location) => {
        return <ul className="locations-ul"> <li className="locations-li" key={location.id}><LocationCard location={location} key={location.id} /></li></ul> 
      });
    } 
  };

  return (
    <div className="locations">
      <div className="Location-header">

      <h1 id="locations-header">List of Locations</h1>
      <button id="locations-button"onClick={handleClick}>
        {" "}
        {buttonStatus ? "Hide Locations" : "Show Locations"}{" "}
      </button>
     
      <div className="sort-option">
      {buttonStatus ? <button>Sort by Name</button>   : null}{" "}
      {buttonStatus ? <button>Sort by Climate</button>   : null}{" "}
      {buttonStatus ? <button>Sort by Terrain</button>   : null}{" "}
      </div>

      {/* {buttonStatus ? locationsInfo() : null}{" "} */}
    
      </div>
     
  
      {locationsInfo()}
    </div>
  );
}
