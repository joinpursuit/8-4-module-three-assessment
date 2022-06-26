import React from "react";
import LocationCard from "./LocationCard";

function LocationsContainer({ locations }) {
  const mappedByName = locations.sort((a,b)=> (a.name > b.name)*2-1)
  const mappedByClimate = locations.sort((a,b)=> (a.climate > b.climate)*2-1)
  const mappedByTerrain = locations.sort((a,b)=> (a.terrain > b.terrain)*2-1)
  // console.log(mappedByName)
  console.log(mappedByClimate)
  // console.log(mappedByTerrain)

  return (
    <div>
      <button id="name-button">SORT BY NAME</button>
      <button id="climate-button">SORT BY CLIMATE</button>
      <button id="terrain-button">SORT BY TERRAIN</button>
      <section>
        {locations.map((location) => {
          return (
            <ul>
              <LocationCard location={location} />
            </ul>
          );
        })}
      </section>
    </div>
  );
}

export default LocationsContainer;