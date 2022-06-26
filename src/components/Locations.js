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

  const handleSubmit = (e) => {
    e.preventDefault()
    location.map((local) => {
      return (
        <div>
          <button>HIDE LOCATIONS</button>
          <ul>
            <ul>Name: {local.name}</ul>
            <ul>Climate: {local.climate}</ul>
            <ul>Terrain: {local.terrain}</ul>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <form onSubmit={ handleSubmit }>
        <button>SHOW LOCATIONS</button>
      </form>
    </div>
  );
}
