import React from "react";
import { useState } from "react-router-dom";
import LocationCard from "./LocationCard";
import "./Locations.css";

function ShowByContainer({ locations }) {
console.log(locations)
  const sortByName = locations.sort((a, b) => a.name.localeCompare(b.name));

  const sortByClimate = locations.sort((a, b) =>
    a.climate.localeCompare(b.climate)
  );

  const sortByTerrain = locations.sort((a, b) =>
    a.terrain.localeCompare(b.terrain)
  );
  return (
    <div className="sort">
      <button id="name-button">SORT BY NAME</button>
      <button id="climate-button">SORT BYCLIMATE</button>
      <button id="terrain-button">SORT BY TERRAIN</button>
      <section>
        {locations.map((location) => {
            
          return (       
            <ul>  
              <LocationCard location={location} key={location.id} />
            </ul>
          );
        })}
      </section>
    </div>
  );
}

export default ShowByContainer;
