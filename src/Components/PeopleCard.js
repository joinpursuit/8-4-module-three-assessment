import React from 'react'


// add the searched person from the People Component as a prop to the PeopleCard Component
function PeopleCard({ foundPerson }) {

  // if there is no person searched will return a message "Please enter a person's name"
  if(!foundPerson) {
    return(
      <div>
        <p>Please enter a person's name!</p>
      </div>
    )
  }  
  // else it will return the person's name, age, eye color and hair color
  return (
    <div>
      <h1>Name: {foundPerson.name}</h1>
      <p><strong>Age: </strong>{foundPerson.age}</p>
      <p><strong>Eye Color: </strong>{foundPerson.eye_color}</p>
      <p><strong>Hair Color: </strong>{foundPerson.hair_color}</p>
      
    </div>
  )
}

export default PeopleCard