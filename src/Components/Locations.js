import React, { useState, useEffect } from "react";
import Location from "./Location";

export default function Locations() {
  const [locations, setLocations] = useState("");
  const [showButton, setShowButton] = useState("Show Location");
  const [nonSorted, setNonSorted] = useState(true);
  const [name, setName] = useState(false);
  const [climate, setClimate] = useState(false);
  const [terrain, setTerrain] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((response) => {
        setLocations(response);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (showButton === "Show Location") {
      setShowButton("Hide Locations");
    } else {
      setShowButton("Show Location");
    }
  };

  const sortName = (e) => {
    e.preventDefault();

    setLocations(
      locations.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
    setNonSorted(false);
    setName(true);
    setClimate(false);
    setTerrain(false);
  };

  const sortClimate = (e) => {
    e.preventDefault();
    setLocations(
      locations.sort((a, b) => {
        const climateA = a.climate.toUpperCase();
        const climateB = b.climate.toUpperCase();
        if (climateA < climateB) {
          return -1;
        }
        if (climateA > climateB) {
          return 1;
        }
        return 0;
      })
    );
    setNonSorted(false);
    setName(false);
    setClimate(true);
    setTerrain(false);
  };

  const sortTerrain = (e) => {
    e.preventDefault();
    setLocations(
      locations.sort((a, b) => {
        const terrainA = a.terrain.toUpperCase();
        const terrainB = b.terrain.toUpperCase();
        if (terrainA < terrainB) {
          return -1;
        }
        if (terrainA > terrainB) {
          return 1;
        }
        return 0;
      })
    );
    setNonSorted(false);
    setName(false);
    setClimate(false);
    setTerrain(true);
  };

  return (
    <div className="locations">
      <h2>List of Locations</h2>
      <button onClick={handleClick}>{showButton}</button>
      {showButton === "Hide Locations" ? (
        <div>
          <button onClick={sortName}>SORT BY NAME</button>
          <button onClick={sortClimate}>SORT BY CLIMATE</button>
          <button onClick={sortTerrain}>SORT BY TERRAIN</button>
        </div>
      ) : (
        <p></p>
      )}

      <ul>
        {showButton === "Hide Locations" && nonSorted === true ? (
          locations.map((location) => {
            return <Location location={location} />;
          })
        ) : (
          <p></p>
        )}

        {showButton === "Hide Locations" && name === true ? (
          locations.map((location) => {
            return <Location location={location} />;
          })
        ) : (
          <p></p>
        )}

        {showButton === "Hide Locations" && climate === true ? (
          locations.map((location) => {
            return <Location location={location} />;
          })
        ) : (
          <p></p>
        )}

        {showButton === "Hide Locations" && terrain === true ? (
          locations.map((location) => {
            return <Location location={location} />;
          })
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}
