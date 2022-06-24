import React, { useEffect, useState } from "react";
import "./People.css";
import PersonCard from "./PersonCard";

function People() {

  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  // console.log(people);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  const foundPerson = people.find(person => person.name === input)
  const handleSubmit = (e) => {
    e.preventDefault();
    // setInput(e.target.value)
  }

  console.log(foundPerson)
  return (
    <div>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInput(e.target.value)}type="text" ></input>
        <button>Submit</button>
      </form>
      <PersonCard foundPerson={foundPerson}/>
    </div>
  );
}

export default People;
