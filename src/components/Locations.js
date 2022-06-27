import React from 'react'
import { useState, useEffect } from 'react';
const url = 'https://ghibliapi.herokuapp.com/locations';


const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [sortNames, setSortNames] = useState(false);
  const [sortClimates, setSortClimates] = useState(false);
  const [sortTerrains, setSortTerrains] = useState(false);
  const fetchLocations = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLocations(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(locations);

  useEffect(() => {
    fetchLocations();
  }, []);
  
  
  const locationItem = locations.map((location) => {
    return (
      <ul className="locations">
        <ul>
          <li key={location.id}>
            {`Name: ${location.name}`}
            <li> {`Climate: ${location.climate}`}</li>
         
            <li> {`Terrain: ${location.terrain}`}</li>
   
          </li>
        </ul>
      </ul>
    );
  });
  const showLocation = () => {

    setShowLocations(!showLocations);
  };
  const sortName = () => {
 
    locations.sort((a, b) => (a.name > b.name ? 1 : -1));
    setSortNames(!sortNames);
  };
  const sortClimate = () => {
   
    locations.sort((a, b) => (a.climate > b.climate ? 1 : -1));
    
    setSortClimates(!sortClimates);
  };
  const sortTerrain = () => {
    locations.sort((a, b) => (a.terrain > b.terrain ? 1 : -1));
    setSortTerrains(!sortTerrains);
  };
 
  
    return (
      <div className="locations">
        <p>List of Locations</p>

        <button onClick={showLocation}>
          {showLocations ? 'Hide Locations' : 'Show Locations'}
        </button>
        {showLocations && locationItem}
        <div>


          <button className="name" onClick={sortName}>
            {sortNames ? 'Hide Locations' : 'Sort by Name'}
          </button>

          <button className="name" onClick={sortClimate}>
            {sortClimates ? 'Hide Locations' : 'Sort by Climate'}
          </button>

          <button className="name" onClick={sortTerrain}>
            
            {sortTerrains ? 'Hide Locations' : 'Sort by Terrain '}
          </button>

          {sortNames && locationItem}
          {sortClimates && locationItem}
          {sortTerrains && locationItem}
          
        </div>
      </div>
    );
  }


export default Locations