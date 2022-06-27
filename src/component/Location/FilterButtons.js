import React, {useState} from 'react'

function FilterButtons({setFilter}) {
  return (
    <div>
      <button onClick={()=>{setFilter("name")}}>Sort by Name</button>
      <button onClick={()=>{setFilter("climate")}}>Sort by Climate</button>
      <button onClick={()=>{setFilter("terrain")}}>Sort by Terrain</button>
    </div>
  )
}

export default FilterButtons