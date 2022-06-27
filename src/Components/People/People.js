import React, { useEffect, useState } from "react";
import "./People.css";
import PersonCard from "./PersonCard";

function People() {

  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  const [foundPerson, setFoundPerson] = useState([])
  // console.log(people);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoundPerson(people.filter(person => person.name.toUpperCase() === input.toUpperCase()))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  
  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={input} ></input> 
        <button>Submit</button>
      </form>
      { foundPerson.length > 0 ? (<PersonCard foundPerson={foundPerson}/>) : (<p>Not Found</p>)}
    </div>
  );
}

export default People;

//onChange stays the same 
//handleSubmit has to change. setInput in handlechange has to be set witha  different variable that equals the input with all letters to lowercase
