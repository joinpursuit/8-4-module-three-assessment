import { React, useState } from 'react';
import SortedLocations from './SortedLocations';
import './LocationsIndex.css'

function LocationsIndex({ locations }) {
  const [displayButton, setdisplayButton] = useState(false);
  const [sortedLocations, sortLocation] = useState('all')

  const startEditingHandler = () => {
    setdisplayButton(true);
  }

  const stopEditingHandler = () => {
    setdisplayButton(false);
  }

  const getSortedLocations = (e) => {
    sortLocation(e.target.value)
  }

  return (
    <div className="locations">
      {!displayButton && <button onClick={startEditingHandler}>Show Locations</button>}
      {displayButton &&
        <div className='opened_Buttons'>
          <button onClick={stopEditingHandler}>Hide Locations</button>
          <button onClick={getSortedLocations} value='name'>Sort by Name</button>
          <button onClick={getSortedLocations} value='climate'>Sort by Climate</button>
          <button onClick={getSortedLocations} value='terrain'>Sort by Terrain</button>
        </div>
      }
      <div className={displayButton ? 'show' : 'hidden'} >
        <SortedLocations locations={locations} sortedLocations={sortedLocations}/>
      </div>
    </div>
  )
}

export default LocationsIndex