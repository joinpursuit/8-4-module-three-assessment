import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

export default function Locations({ allLocations, setAllLocations }) {
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
  };

  const locationsInfo = () => {
    if (buttonStatus) {
      return allLocations.map((location) => {
        return <LocationCard location={location} key={location.id} />;
      });
    } 
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={handleClick}>
        {" "}
        {buttonStatus ? "Hide Locations" : "Show Locations"}{" "}
      </button>
      {/* {function that loads all of the cards... through map} */}
      {locationsInfo()}
    </div>
  );
}
