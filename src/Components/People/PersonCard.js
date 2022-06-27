import React from 'react'



function PersonCard({ foundPerson }) {

  const [person] = foundPerson
  return (
    <div>
      <h1>Name: {person.name}</h1>
      <p><strong>Age: </strong>{person.age}</p>
      <p><strong>Eye Color: </strong>{person.eye_color}</p>
      <p><strong>Hair Color: </strong>{person.hair_color}</p>
      
    </div>
  )
}

export default PersonCard