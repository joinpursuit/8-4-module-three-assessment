import { useState, useEffect } from "react";
import Location from "./Location";
import "./Locations.css";

const Locations = () => {
  const [visible, setVisible] = useState(false);
  const [locations, setLocations] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  const locationsCopied = [...locations];

  const allLocations = () => {
    return locationsCopied.map((location) => {
      return (
        <ul>
          <li>
            <Location location={location} sort={sort} />
          </li>
        </ul>
      );
    });
  };

  const handleNameSort = () => {
    setLocations(
        locationsCopied.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setSort(true);
  };

  const handleClimateSort = () => {
    setLocations(
        locationsCopied.sort((a, b) => {
        if (a.climate.toLowerCase() < b.climate.toLowerCase()) {
          return -1;
        }
        if (a.climate.toLowerCase() > b.climate.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setSort(true)
  };

  const handleTerrainSort = () =>{
    setLocations(
        locationsCopied.sort((a, b) => {
          if (a.terrain.toLowerCase() < b.terrain.toLowerCase()) {
            return -1;
          }
          if (a.terrain.toLowerCase() > b.terrain.toLowerCase()) {
            return 1;
          }
          return 0;
        })
      );
      setSort(true)
  }

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <section className="buttons">
        <button
          type="submit"
          className="show"
          onClick={() => (!visible ? setVisible(true) : setVisible(false))}
        >
          {!visible ? "Show Locations" : "Hide Locations"}
        </button>

        {visible ? (
          <button type="submit" className="name" onClick={handleNameSort}>
            Sort by Name
          </button>
        ) : null}

        {visible ? <button type="submit" className="climate" onClick={handleClimateSort}>Sort by Climate</button> : null}

        {visible ? <button type="submit" className="terrain" onClick={handleTerrainSort}>Sort by Terrain</button> : null}
      </section>

      {visible ? allLocations() : null}
    </div>
  );
};

export default Locations;
