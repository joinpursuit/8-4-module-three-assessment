import React, {useState, useEffect} from 'react'
import "./LocationsToggle.css"

export default function LocationsToggle() {

  const [locations, setLocations] = useState([])
  const [buttonText, setButtonText] = useState(false)

  useEffect(()=>{
    fetch(
      "https://ghibliapi.herokuapp.com/locations"
    )
    .then((response) => response.json())
    .then((data) => setLocations(data))
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
  }


  return (
    <div className='locations'>
      <h1>List of Locations</h1>
      <button type="submit" onClick={()=>{setButtonText(!buttonText); handleClick()}}>{buttonText ? "Hide Locations" : "Show Locations"}</button>

      {locations.map((location)=>{
          if(buttonText){
            return(
              <li>
                  <h2>Name: {location.name}</h2>
                  <h4>Climate: {location.climate}</h4>
                  <h4>Terrain: {location.terrain}</h4>
              </li>
            )
          }
        })}
        
    </div>
  )
}
