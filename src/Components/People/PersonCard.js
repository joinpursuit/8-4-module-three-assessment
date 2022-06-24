import React from 'react'



function PersonCard({ foundPerson }) {

  if(!foundPerson) {
    return(
      <div>
        <p>Please enter a person's name!</p>
      </div>
    )
  }  
  return (
    <div>
      <h1>Name: {foundPerson.name}</h1>
      <p><strong>Age: </strong>{foundPerson.age}</p>
      <p><strong>Eye Color: </strong>{foundPerson.eye_color}</p>
      <p><strong>Hair Color: </strong>{foundPerson.hair_color}</p>
      
    </div>
  )
}

export default PersonCard