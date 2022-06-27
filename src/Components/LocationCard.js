import React from 'react'

export default function LocationCard({location}) {
  return (
    <div className='locations'>
      <ul>
        <li>Name: {location.name}</li>
        <li>Climate: {location.climate}</li>
        <li>Terrain: {location.terrain}</li>
      </ul>
    </div>
  )
}
