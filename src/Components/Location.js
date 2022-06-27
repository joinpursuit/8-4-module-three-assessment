import { React, useState, useEffect } from "react";
import LocationCard from "./LocationCard";

function Location() {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    async function getLocations() {
      const res = await fetch("https://ghibliapi.herokuapp.com/locations");
      const data = await res.json();
      setLocations(
        data.map(({ name, climate, terrain }) => ({
          name: name,
          climate: climate,
          terrain: terrain,
        }))
      );
    }
    getLocations();
  }, []);

  console.log(locations);

  const onClick = (e) => {
    e.preventDefault();
    setShow(true);
    setToggle(!toggle);
    hidden === false ? setHidden(true) : setHidden(false)
};

  const handleSortNames = (e) => {
    e.preventDefault();
    setShow(true);
    const sortedNames = [...locations].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setLocations(sortedNames);
  };

  const handleSortClimates = (e) => {
    e.preventDefault();
    setShow(true);
    const sortedClimates = [...locations].sort((a, b) => {
      return a.climate > b.climate ? 1 : -1;
    });
    setLocations(sortedClimates);
  };

  const handleSortTerrains = (e) => {
    e.preventDefault();
    setShow(true);
    const sortedTerrains = [...locations].sort((a, b) => {
      return a.terrain > b.terrain ? 1 : -1;
    });
    setLocations(sortedTerrains);
  };

  return (
    <div>
      <article className="location">
        <button id="locations-button" onClick={onClick}>
        {toggle ? "Show Locations" : "Hide Locations"}
        </button>
        <button id="sort-names" onClick={handleSortNames} hidden={hidden}>
        {!toggle ? "Sort by Name" : null }
        </button>
        <button id="sort-climates" onClick={handleSortClimates} hidden={hidden}>
        {!toggle ? "Sort by Climates" : null }
        </button>
        <button id="sort-terrains" onClick={handleSortTerrains} hidden={hidden}>
        {!toggle ? "Sort by Terrains" : null }
        </button>
        {show && !toggle ? locations.map((location) => <LocationCard location={location}/>): null}
      </article>
    </div>
  );
}

export default Location;
