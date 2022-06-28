import React, {useState, useEffect} from 'react'
import "./LocationsToggle.css"

export default function LocationsToggle() {

  const [locations, setLocations] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(()=>{
    fetch(
      "https://ghibliapi.herokuapp.com/locations"
    )
    .then((response) => response.json())
    .then((data) => setLocations(data))
  }, [])


  return (
    <div className='locations'>
      <h1>List of Locations</h1>
      <button type="submit" onClick={()=>{setToggle(!toggle)}}>{!toggle ? "Show Locations" : "Hide Locations"}</button>

      {toggle ?  <div>
        <button>Sort by Name</button>
        <button>Sort by Climate</button>
        <button>Sort by Terrain</button>
      </div> : null}
      
      {locations.map((location)=> toggle ? <ul>
              <li>
                  <h2>Name: {location.name}</h2>
                  <h4>Climate: {location.climate}</h4>
                  <h4>Terrain: {location.terrain}</h4>
              </li>
              </ul> : null)}
        
    </div>
  )
}
