import React from 'react'



export default function LocationInfo({locate}) {



  return (
   
    <div>
     <li>
      <p> <b>Name</b>: {locate.name}</p>
      <p><b>Climate</b>: {locate.climate}</p>
      <p><b> Terrain</b>: {locate.terrain}</p>
      </li>
    </div>
  )
}