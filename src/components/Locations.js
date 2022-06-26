import React from "react";
import { useEffect } from "react";
import "./Locations.css";

export default function Locations({ location, setLocation }) {
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((locals) => {
        // console.log(locals);
        setLocation(locals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setLocation]);

  // console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault()
    location.map((local) => {
      return (
        <>
          <button>HIDE LOCATIONS</button>
          <ul>
            <ul>Name: {local.name}</ul>
            <ul>Climate: {local.climate}</ul>
            <ul>Terrain: {local.terrain}</ul>
          </ul>
        </>
      );
    });
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <form>
        <button onSubmit={ handleSubmit }>SHOW LOCATIONS</button>
      </form>
    </div>
  );
}
