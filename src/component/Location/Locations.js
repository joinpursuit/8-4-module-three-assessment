import React, { useState, useEffect } from "react";
import "./Locations.css";
import FilterButtons from "./FilterButtons";
import Location from "./Location" 

function Locations() {
  const [reveal, setReveal] = useState(false);
  const [locationData, setLocationData] = useState([])
  const [filter, setFilter] = useState('')

useEffect(()=>{
  fetch(
    "https://ghibliapi.herokuapp.com/locations"
    )
    .then((response) => response.json())
    .then((locations) => {
    
      console.log(locations)
      setLocationData(locations)
    

    })
    .catch((error) => {
      console.log(error);
    });
},[])

const locationFilter =(filter)=>{
  if(filter === "name"){
    console.log('hello')
  }
  
}

 

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      {reveal ? <button onClick={()=>{setReveal(false)}}> Hide Locations </button>: <button onClick={()=>{setReveal(true)}}> Show Locations </button>}
      {reveal ? <FilterButtons setFilter = {setFilter}/> : null}
      {reveal ? locationFilter(): null }


    
    </div>
  );
}

export default Locations;
