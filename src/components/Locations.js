import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import "./Locations.css";

export default function Locations({ allLocations, setAllLocations }) {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [sortedPeople, setSortedPeople] = useState([]);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
    locationsInfo();//PROBLEM - ONLY RENDER ON CLICK - HOW TO CHANGE IT?
  };

  const locationsInfo = () => {
    if (buttonStatus) {
      return allLocations.map((location,index) => {
        return (
          <ul className="locations-ul" key={index}>
            {" "}
            <li className="locations-li" key={location.id}>
              <LocationCard location={location} key={location.id} />
            </li>
          </ul>
        );
      });
    }
  };

  const sortByName = () => {
    //sort the alllocation by name .
    // then set it - all location
    //then map it - and return it with locationcard.js.
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
    // setButtonStatus(true); -- it does not rederner - ask about it 2morr. 
    locationsInfo()//WHY DOES THIS NOT WORK?
    // console.log(allLocations)
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
    // setButtonStatus(!buttonStatus);
    locationsInfo()
    // console.log(allLocations)
  };

  return (
    <div className="locations">
      <div className="Location-header">
        <h1 id="locations-header">List of Locations</h1>
        <button id="locations-button" onClick={handleClick}>
          {" "}
          {buttonStatus ? "Hide Locations" : "Show Locations"}{" "}
        </button>

        <div className="sort-option">
          {buttonStatus ? (<button onClick={sortByName}>Sort by Name</button>) : null}{" "}
          {buttonStatus ? <button onClick={sortByClimate}>Sort by Climate</button> : null}{" "}
          {buttonStatus ? <button>Sort by Terrain</button> : null}{" "}
        </div>

      
      </div>
{/* render it down here. need to FIX IT.  */}
{/* {buttonStatus ? locationsInfo() : locationsInfo()}{" "} */}

{/* use 2 more state to have a multi ternary that maybe works??? */}
      {locationsInfo()}
    </div>
  );
}
