import React from "react";
import "./People.css";

function PersonCard({ searchPerson }) {
 
  return (
    <>
      <aside className="person-details">
        <h1>Name:   {searchPerson.name}</h1>
     
        <span className="label">Age: </span>
        <span className="result">{searchPerson.age} </span>     
      

        <span className="label">Eye Color: </span>
        <span className="result"> {searchPerson.eye_color} </span>
 
        <span className="label">Hair Color: </span>
        <span className="result"> {searchPerson.hair_color} </span>
 
      </aside>
    </>
  );
}

export default PersonCard;
