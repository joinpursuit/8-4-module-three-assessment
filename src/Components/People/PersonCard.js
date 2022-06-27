import React from 'react'
import "./PersonCard.css";

function PersonCard({ searchedPerson }) {

  if(!searchedPerson) {
    return(
      <div className="person-input">
        <p>Please enter a person's name!</p>
      </div>
    )
  }  
  return (
    <div className="person-details">
      <h1>Name: {searchedPerson.name}</h1>
      <p><strong>Age: </strong>{searchedPerson.age}</p>
      <p><strong>Eye Color: </strong>{searchedPerson.eye_color}</p>
      <p><strong>Hair Color: </strong>{searchedPerson.hair_color}</p>
      
    </div>
  )
}

export default PersonCard;