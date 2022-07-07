import React from "react";
// import LocationCard created with the sorted data 
import LocationCard from "./LocationCard";

// with the  locations list added to LocationsContainer component as props 

function LocationsContainer({ locations }) {
  
  const mappedByName = locations.sort((a,b)=> (a.name > b.name)*2-1)
  
  console.log(mappedByName)
  

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