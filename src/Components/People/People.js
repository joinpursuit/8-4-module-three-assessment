import React, { useEffect, useState } from "react";
import "./People.css";
import PersonCard from "./PersonCard";

function People() {

  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  const searchedPerson = people.find(person => person.name.toLowerCase() === input)
  const handleSubmit = (e) => {
    e.preventDefault();
   setInput("")
  }


  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={ handleSubmit } className="form__container">
      <label htmlFor="type">
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        </label>
          <input type="submit" />
      </form>
      <PersonCard searchedPerson={searchedPerson}/>
    </div>
  );
}

export default People;
