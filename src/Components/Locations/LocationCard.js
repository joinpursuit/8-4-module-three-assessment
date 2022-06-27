import React from 'react'
import "./Locations.css"
function LocationCard({location}) {
  return (
    <div className='location-card'>
    <li>
      <p><strong>Name:</strong> {location.name}</p>
      <p><strong>Terrain:</strong> {location.terrain}</p>
      <p><strong>Climate:</strong> {location.climate}</p>
    </li>
    </div>
  )
}

export default LocationCard