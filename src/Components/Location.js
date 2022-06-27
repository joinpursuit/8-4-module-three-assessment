import React from 'react'
import { useEffect, useState } from 'react'

export default function Location({location}) {
const [show, setShow] = useState(false)

    useEffect(() => {
        if(show === false){
            setShow(true)
        } else {
            setShow(false)
        }
      }, []);

  return (
    
    <li>
        <p>Name: {location.name}</p>
        <p>Climate: {location.climate}</p>
        <p>Terrain: {location.terrain}</p>
    </li>
  )
}
