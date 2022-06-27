import React from 'react'

export default function PersonCard({foundPerson}) {
  return (
    <div>
      <h2>Name: {foundPerson.name}</h2>
      <p> Age: {foundPerson.age}</p>
      <p> Hair Color: {foundPerson.hair_color}</p>
      <p>Eye Color: {foundPerson.eye_color}</p>
    </div>
  )
}