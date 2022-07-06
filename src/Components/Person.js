

import React from 'react'

export default function Person({human}) {
  return (
    <div>
        <h2>Name: {human[0].name}</h2>
        <p>Age: {human[0].age}</p>
        <p>Eye Color: {human[0].eye_color}</p>
        <p>Hair Color: {human[0].hair_color}</p>
    </div>
  )
}
