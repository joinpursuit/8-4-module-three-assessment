import React from 'react'
import {useEffect, useState} from "react"

function Locations() {
  const [locations, setLocations] = useState([])

    useEffect (() => {
        fetch (`https://ghibliapi.herokuapp.com/locations`)
        .then((data) => data.json())
        .then((locations) => setLocations(locations))
        .catch((error) => console.log("Location Not Found"));
    
       }, []);
  return (
    <div className="hometitle">
        <h2>List of Locations</h2>
    </div>
  )
}

export default Locations