import React, { useState } from "react";
import LocationCard from "./LocationCard";
import "./Locations.css";

export default function Locations({ allLocations, setAllLocations }) {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [sortedPeople, setSortedPeople] = useState(false);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
  };

  const locationsInfo = () => {
    return allLocations.map((location, index) => {
      return (
        // <div className="locations-div">
          <ul className="locations-ul" key={index}>
            <li className="locations-li" key={location.id}>
              <LocationCard
                sortedPeople={sortedPeople}
                location={location}
                key={location.id}
              />
            </li>
          </ul>
        // </div>
      );
    });
  };

  const sortByName = () => {
    setAllLocations(
      allLocations.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );
    setSortedPeople(!sortedPeople);
  };

  const sortByClimate = () => {
    setAllLocations(
      allLocations.sort(function (a, b) {
        if (a.climate < b.climate) {
          return -1;
        }
        if (a.climate > b.climate) {
          return 1;
        }
        return 0;
      })
    );
    setSortedPeople(!sortedPeople);
  };

  const sortByTerrain = () => {
    setAllLocations(
      allLocations.sort(function (a, b) {
        if (a.terrain < b.terrain) {
          return -1;
        }
        if (a.terrain > b.terrain) {
          return 1;
        }
        return 0;
      })
    );
    setSortedPeople(!sortedPeople);
  };

  return (
    <div className="locations">
      <div className="Location-header">
        <h1 id="locations-header">List of Locations</h1>
        <button id="locations-button" onClick={handleClick}>
          {buttonStatus ? "Hide Locations" : "Show Locations"}{" "}
        </button>

        <div className="sort-option">
          {buttonStatus ? (
            <button className="followUpButton" onClick={sortByName}>Sort by Name</button>
          ) : null}{" "}
          {buttonStatus ? (
            <button className="followUpButton" onClick={sortByClimate}>Sort by Climate</button>
          ) : null}{" "}
          {buttonStatus ? (
            <button className="followUpButton" onClick={sortByTerrain}>Sort by Terrain</button>
          ) : null}{" "}
        </div>
      </div>
      {/* nicer styling but fails cypress */}
      {/* <div className="info"> */} 
      {buttonStatus ? locationsInfo() : null}
      {/* </div> */}
     
    </div>
  );
}
