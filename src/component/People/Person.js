import React from 'react'
import "./Person.css"

function Person({name, age, hairColor, eyeColor}) {
  return (
    <div className ='person'>
      <h1>{name}</h1>
      <p><b>Age:</b> {age}</p>
      <p><b>Eye Color:</b> {eyeColor}</p>
      <p><b>Hair Color:</b> {hairColor}</p>
    </div>
  )
}

export default Person