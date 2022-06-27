import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import "./locations.css";

import LocationCard from "./locationCard";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    !visible ? setVisible(true) : setVisible(false);
  };

  const handleTerrain = () => {
    // sorting by terrain
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
