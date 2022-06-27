import React, { useEffect, useState } from "react";
import "./Locations.css";
import ShowByContainer from "./ShowByContainer";

function LocationsList({}) {
  const [locations, setLocations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(locations);

  return (
    <section className="locations">
      <h2>List of Locations</h2>
      <button
        id="show-button"
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {!showAll ? "Show Locations" : "Hide Locations"}
      </button>
      <section className="allLocations">
        <div>{showAll ? <ShowByContainer locations={locations} setLocations={setLocations} /> : null}</div>
      </section>
    </section>
  );
}

export default LocationsList;
