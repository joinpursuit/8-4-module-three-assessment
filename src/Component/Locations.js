import React from 'react'
import { useEffect, useState } from "react"

function Locations() {
  const [locations, setLocations] = useState([])
  const [show, setShow] = useState(true)

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((data) => data.json())
      .then((locations) => setLocations(locations))
      .catch((error) => console.log("error"));
  }, []);
  return (
    <div className="locations">
      <div className="hometitle">
        <h2>List of Locations</h2>
        <button type="submit" onClick={(event) => { setShow(!show) }}>
          {!show ? "Show Locations" : "Hide Locations"}</button>
        <div className="uls">
          {locations.map((location) => show ?
            <ul classname='loc'>
              <li>
                <p>Name: {location.name}</p>
                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </li>
            </ul>
            : <p></p>
          )}
        </div>
      </div>
    </div>
  )
}
export default Locations