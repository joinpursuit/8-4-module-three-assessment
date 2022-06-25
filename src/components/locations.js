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

import { React, useEffect, useState } from "react";

import LocationCard from "./locationCard";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    !visible ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={handleClick}>{visible ? "Hide Locations"  : "Show Locations"}</button>
      {visible ? (
        <div className="locations">
          <ul>
            {locations.map((location) => {
              return (
                <li>
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
