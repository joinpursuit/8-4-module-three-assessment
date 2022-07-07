import React,{useState, useEffect} from 'react';
import './Locations.css'
export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false)

   useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((locationsData) => locationsData.json())
      .then((movies) => setLocations(movies));
   }, []);
   return(
    <div>{show ? <ul className='locationCard'><p>{location.name} - {location.name} - {location.terrain} - {location.climate}</p>
    </ul> 
    </div>
  )
}

