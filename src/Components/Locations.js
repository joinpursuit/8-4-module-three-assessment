import React from "react";
import { useState, useEffect } from "react";
import LocationInfo from "./LocationInfo";
const loca = {
  fontSize: "30px",
};

export default function Locations() {
  const [location, setLocation] = useState([]);
  const [showKey, setShowKey] = useState("Show Locations");
  const [name, setName] = useState(false);
  const [climate, setClimate] = useState(false);
  const [terrain, setTarrain] = useState(false);
  const [option1, setOption] = useState(true);

  console.log(location);
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => setLocation(data))
      .catch((error) => console.log(error));
  }, []);


  function handleLocation(e) {
    e.preventDefault();
    if (showKey === "Show Locations") {
      setShowKey("Hide Locations");
    } else {
      setShowKey("Show Locations");
    }

  }

  function sortName(event) {
    event.preventDefault();
    setLocation(
      location.sort((x, y) => {
        const nameX = x.name.toUpperCase();
        const nameY = y.name.toUpperCase();
        if (nameX < nameY) {
          return -1;
        }
        if (nameX > nameY) {
          return 1;
        }
        return 0;
      })
    );

    setName(true);
    setOption(false);
    setClimate(false);
    setTarrain(false);
  }
  function sortClimate(event) {
    event.preventDefault();
    setLocation(
      location.sort((x, y) => {
        const climateX = x.climate.toUpperCase();
        const climateY = y.climate.toUpperCase();
        if (climateX < climateY) {
          return -1;
        }
        if (climateX > climateY) {
          return 1;
        }
        return 0;
      })
    );
    setTarrain(false);
    setName(false);
    setOption(false);
    setClimate(true);
  }
  function sortTerrain(event) {
    event.preventDefault();
    setLocation(
      location.sort((x, y) => {
        const terrainX = x.name.toUpperCase();
        const terrainY = y.name.toUpperCase();
        if (terrainX < terrainY) {
          return -1;
        }
        if (terrainX > terrainY) {
          return 1;
        }
        return 0;
      })
    );

    setTarrain(true);
    setName(false);
    setOption(false);
    setClimate(false);
  }


  return (
    <div className="locations">
      
      <p style={loca}>List of Locations</p>
      <button onClick={handleLocation} type="submit">
        {showKey}
      </button>
      {showKey === "Hide Locations" ? (
        <div>
          <button onClick={sortName}>Sort by Name</button>

          <button onClick={sortClimate}>Sort by Climate</button>
          <button onClick={sortTerrain}>Sort by Terrain</button>
        </div>
      ) : (
        <p className="look"></p>
      )}
      <ul>
        {showKey === "Hide Locations" && option1 === true ? (
          location.map((locate) => {
            return <LocationInfo locate={locate} />;
          })
        ) : (
          <p className="look"></p>
        )}

        {showKey === "Hide Locations" && name === true ? (
          location.map((locate) => {
            return <LocationInfo locate={locate} />;
          })
        ) : (
          <p className="look"></p>
        )}

        {showKey === "Hide Locations" && climate === true ? (
          location.map((locate) => {
            return <LocationInfo locate={locate} />;
          })
        ) : (
          <p className="look"></p>
        )}
        {showKey === "Hide Locations" && terrain === true ? (
          location.map((locate) => {
            return <LocationInfo locate={locate} />;
          })
        ) : (
          <p className="look"></p>
        )}
      </ul>
    </div>
  );
}