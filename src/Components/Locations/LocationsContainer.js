import React, {useState }from "react";
import LocationCard from "./LocationCard";

function LocationsContainer({ locations, setLocations }) {

  // const [sortNames, setSortNames] = useState(false)
  // const sortName = (e) => {
  //   e.preventDefault()
  //   setSortNames(!sortNames)
  // }
  // const [ key, setKey ] = useState("")

  // const sortedByName = locations.sort((a,b) => (a.name < b.name ? 1 : -1))
  // const sortedByClimate = locations.sort((a,b)=> (a.key < b.climate ? 1 : -1))
  // const mappedByTerrain = locations.sort((a,b)=> (a.terrain < b.terrain ? 1 : -1))
  // console.log(sortedByName)
  
  
  return (
    <div>
      
      <button  id="name-button">SORT BY NAME</button>
      <button id="climate-button">SORT BY CLIMATE</button>
      <button id="terrain-button">SORT BY TERRAIN</button>
      <section>
        <ul className="section">
        {locations.map((location) => {
          return (
           <li>
              <LocationCard location={location} />
           </li>
          );
        })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsContainer;


//setSortName state

//useState for variable that will re render

//sort by key when onClick is heard 

//focus on the key of each location!

//focus on how to key in into objecs. bracket instead of dot notation
