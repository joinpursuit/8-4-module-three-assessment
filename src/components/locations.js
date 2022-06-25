/*
 CHECK All content should be inside of some element with the class .locations.

 CHECK Has the text "List of Locations" on the page.

 CHECK When arriving on the page, has a button with the text "Show Locations".

 When the "Show Locations" button is clicked, the text should be changed to "Hide Locations".

 When the "Show Locations" button is clicked, all of the locations received from the API should be displayed. Each location should include it's name, climate, and terrain.

 CHECK Use list items to display each of these locations.

Note

CHECK Locations should be made up of an unordered list
CHECK Within each location list item should be another unordered list. The list items within this list should be
        -location name
        -location climate
        -location terrain

*/

// Sorting thoughts - a main function that handles how the data is passed into
// the locationCard component. Default is as the API provides, 'Sort by Climate' and
// 'Sort by Terrain' will... no, all that should need to be done is sorting everything
// in the state. So if these buttons are clicked, that's all that needs to be done.
// 2 seperate functions to handle each of those cases?

import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./locations.css";

import LocationCard from "./locationCard";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    !visible ? setVisible(true) : setVisible(false);
  };

  const handleTerrain = () => {
    //sorting by terrain
    setLocations(locations.sort((a, b) => {
      let terrainA = a.terrain.toLowerCase();
      let terrainB = b.terrain.toLowerCase();
      if (terrainA < terrainB) {
        return -1;
      }
      if (terrainA > terrainB) {
        return 1;
      }
      return 0;
    }));
  };

  const handleClimate = () => {
    //sorting by climate
    locations.sort((a, b) => {
      let climateA = a.climate.toLowerCase();
      let climateB = b.climate.toLowerCase();
      if (climateA < climateB) {
        return -1;
      }
      if (climateA > climateB) {
        return 1;
      }
      return 0;
    });
  };

  const handleName = () => [
    //sorting by name
    locations.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  ];

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <Button onClick={handleClick}>
        {visible ? "Hide Locations" : "Show Locations"}
      </Button>
      {visible ? (
        <>
          <Button onClick={handleTerrain}>Sort by Terrain</Button>
          <Button onClick={handleClimate}>Sort by Climate</Button>
          <Button onClick={handleName}>Sort by Name</Button>
        </>
      ) : null}

      {visible ? (
        <div>
          <ul className="locations">
            {locations.map((location) => {
              return (
                <li className="location-card">
                  <LocationCard
                    name={location.name}
                    climate={location.climate}
                    terrain={location.terrain}
                    key={location.id}
                  />
                  <br></br>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
