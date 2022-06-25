import React from 'react'

function LocationCard({location}) {
  return (
    <div>
      <li><strong>Name:</strong> {location.name}</li>
      <li><strong>Terrain:</strong> {location.terrain}</li>
      <li><strong>Climate:</strong> {location.climate}</li>
    
    </div>
  )
}

export default LocationCard