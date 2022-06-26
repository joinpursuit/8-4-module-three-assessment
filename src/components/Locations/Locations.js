import React,{ useState, useEffect } from 'react';
import LocationsPage from './LocationsPage';


const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocation, setShowLocation] = useState(false)

  const getLocations = () => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
       .then((res) => res.json())
       .then((data) => setLocations(data))
       .catch((error) => console.log(error));
  }

  useEffect(() => {
    getLocations();
  })


  return (
    <div className="locations">

        <h1>List of Locations</h1>
        <button onClick={() => {setShowLocation(!showLocation)}}>{!showLocation ? "SHOW LOCATIONS": "HIDE LOCATIONS"}</button>
        <p>{showLocation ? <LocationsPage locations={locations}/> : null}</p>

    </div>
  )
}

export default Locations;

// when page renders or loads has a button that says "Show Locations"
// upon clicked of the button text should change to "Hide Locations"
// when show location is clicked all the locations recieved from the api should be displayed each should include its name, climate, and terrain
// when the "Hide Locations" is clicked all the location should be hidden