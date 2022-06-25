import React, { useEffect, useState } from "react";
import "./Locations.css";
import LocationCard from "./LocationCard";

function Locations() {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLocations();
  }, []);

  // const handleCLick = (e) => {
  //   e.preventDefault()
  //   {locations.map((location) =>{
  //     return(
  //       <LocationCard location={location}/>
  //     )
  //   })}
  // }

  return (
    <div>
      <button>Show Locations</button>
      <h1>List of Locations</h1>
      <section>
        {locations.map((location) => {
          return (
            <ul>
              <LocationCard location={location} />
            </ul>
          );
        })}
      </section>
    </div>
  );
}

export default Locations;
