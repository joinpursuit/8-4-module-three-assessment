import React, {useState, useEffect} from 'react'
import "./LocationsToggle.css"

export default function LocationsToggle() {

  const [locations, setLocations] = useState([])
  const [toggle, setToggle] = useState(true)
  const [byName, setByName] = useState([])

  useEffect(()=>{
    fetch(
      "https://ghibliapi.herokuapp.com/locations"
    )
    .then((response) => response.json())
    .then((data) => setLocations(data))
  }, [])

  const handleClick = (event) => {
    setByName(locations.sort((a,b)=>{
      if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
      }
      if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      }
      return 0; 
    }))
  }


  return (
    <div className='locations'>
      <h1>List of Locations</h1>
      <button type="submit" onClick={()=>{setToggle(!toggle)}}>{!toggle ? "Show Locations" : "Hide Locations"}</button>

      {toggle ?  <div>
        <button onClick={()=> {handleClick(); byName.map((locationByName) => {
      return (<ul>
            <li><span>Name:<span>{locationByName.name}</span></span></li>
            <li><span>Climate:<span>{locationByName.climate}</span></span></li>
            <li><span>Terrain:<span>{locationByName.terrain}</span></span></li>
        </ul>)
    })}}>Sort by Name</button>
        <button>Sort by Climate</button>
        <button>Sort by Terrain</button>
      </div>  : null}
        <ul>
      {locations.map((location)=> toggle ? <ul>
              <li>
                  <h2>Name: {location.name}</h2>
                  <h4>Climate: {location.climate}</h4>
                  <h4>Terrain: {location.terrain}</h4>
              </li>
              </ul> : null)}
        </ul>
        
    </div>
  )
}
