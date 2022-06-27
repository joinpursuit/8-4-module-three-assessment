import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import "./locations.css";

import LocationCard from "./locationCard";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  const handleClick = (e) => {
    !visible ? setVisible(true) : setVisible(false);
  };

  const handleTerrain = () => {
    // sorting by terrain
    // pass in callback, and spread - this makes the sort update the state properly
    setLocations((prev) =>
      [...prev].sort((a, b) => {
        let terrainA = a.terrain.toLowerCase();
        let terrainB = b.terrain.toLowerCase();
        if (terrainA < terrainB) {
          return -1;
        }
        if (terrainA > terrainB) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleClimate = () => {
    //sorting by climate
    setLocations((prev) =>
      [...prev].sort((a, b) => {
        let climateA = a.climate.toLowerCase();
        let climateB = b.climate.toLowerCase();
        if (climateA < climateB) {
          return -1;
        }
        if (climateA > climateB) {
          return 1;
        }
        return 0;
      })
    );
  };

  const handleName = () => [
    //sorting by name
    setLocations((prev) =>
      [...prev].sort((a, b) => {
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
    ),
  ];

  return (
    <div className="locations">
      <header>
        <h1 id="title">List of Locations</h1>
        <Button onClick={handleClick} variant="primary" size="lg">
          {visible ? "Hide Locations" : "Show Locations"}
        </Button>
        {visible ? (
          <div id="sorting-buttons">
            <Button variant="secondary" onClick={handleTerrain}>
              Sort by Terrain
            </Button>
            <Button variant="secondary" onClick={handleClimate}>
              Sort by Climate
            </Button>
            <Button variant="secondary" onClick={handleName}>
              Sort by Name
            </Button>
          </div>
        ) : null}
      </header>

      {visible ? (
        <div>
          <ul className="locations">
            <Row xs={1} md={3}>
              {locations.map((location) => {
                return (
                  <Col>
                    <li className="location-card" key={location.id}>
                      <LocationCard
                        name={location.name}
                        climate={location.climate}
                        terrain={location.terrain}
                        key={location.id}
                      />
                      <br></br>
                    </li>
                  </Col>
                );
              })}
            </Row>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
