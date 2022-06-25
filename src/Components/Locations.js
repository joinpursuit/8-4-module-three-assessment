import React from 'react'
import "./Locations"

function Locations() {
  return (
    <div className='center'>
        <header className='locations'>
            <h1>List of locations</h1>
            <button type='submit'>Show Locations</button>
            <button type='submit'>HIDE LOCATIONS</button>
            <button type='submit'>SORT BY NAME</button>
            <button type='submit'>SORT BY CLIMATE</button>
            <button type='submit'>SORT BY TERRAIN</button>


        </header>
    </div>
  )
}

export default Locations