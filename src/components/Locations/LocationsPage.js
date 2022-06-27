import React from "react";
import LocationsCard from "./LocationsCard";

const LocationsPage = ({ locations }) => {
  return (
    <div>
      <button onClick={sortName}>SORT BY NAME</button>
      <button onClick={sortClimate}>SORT BY CLIMATE</button>
      <button onClick={sortTerrain}>SORT BY TERRAIN</button>
      <section>
        {locations.map((location) => {
          return (
            <ul>
              <LocationsCard location={location} />
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default LocationsPage;
