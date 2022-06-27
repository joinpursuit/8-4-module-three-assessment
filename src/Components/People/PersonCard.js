import React from 'react'
import "./People.css"



function PersonCard({ foundPerson }) {

  const [person] = foundPerson
  return (
    <div className="person">
      <h1>Name: {person.name}</h1>
      <p><strong>Age: </strong>{person.age}</p>
      <p><strong>Eye Color: </strong>{person.eye_color}</p>
      <p><strong>Hair Color: </strong>{person.hair_color}</p>
      
    </div>
  )
}

export default PersonCard