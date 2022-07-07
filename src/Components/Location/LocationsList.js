import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import "./Locations.css";

function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  const locationsSort = [...locations];

  const allLocations = () => {
    return locationsSort.map((location) => {
      return (
        <ul>
          <li>
            <LocationCard location={location} sortBy={sortBy} />
          </li>
        </ul>
      );
    });
  };

  const sortByName = () => {
    setLocations(
      // locations.sort((a, b) => (a.name.toLowerCase).localeCompare(b.name.toLowerCase))
      locationsSort.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setSortBy(true);
  };

  const sortByClimate = () => {
    setLocations(
      locationsSort.sort((a, b) => {
        if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
          return -1;
        }
        if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setSortBy(true);
  };

  const sortByTerrain = () => {
    setLocations(
      locationsSort.sort((a, b) => {
        if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) {
          return -1;
        }
        if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setSortBy(true);
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <section>
        <button
          type="submit"
          className="show"
          onClick={() => (!show ? setShow(true) : setShow(false))}
        >
          {!show ? "Show Locations" : "Hide Locations"}
        </button>

        {show ? (
          <button type="submit" value="name" onClick={sortByName}>
            Sort by Name
          </button>
        ) : null}

        {show ? (
          <button type="submit" value="climate" onClick={sortByClimate}>
            Sort by Climate
          </button>
        ) : null}

        {show ? (
          <button type="submit" value="terrain" onClick={sortByTerrain}>
            Sort by Terrain
          </button>
        ) : null}
      </section>

      {show ? allLocations() : null}
    </div>
  );
}

export default LocationsList;
