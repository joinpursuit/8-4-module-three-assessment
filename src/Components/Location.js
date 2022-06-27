import React from 'react'
import { useEffect, useState } from 'react'

export default function Location({location}) {

  return (

    <li>
        <p>Name: {location.name}</p>
        <p>Climate: {location.climate}</p>
        <p>Terrain: {location.terrain}</p>
    </li>
  )
}
