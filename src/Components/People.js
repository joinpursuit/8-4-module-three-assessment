import React, { useEffect, useState } from "react";
import "./People.css";
// import the PeopleCard component created with People props
import PeopleCard from "./PeopleCard";

function People() {
  // create a useState for list of people set to empty array
  // create a useState for user input set to an empty string - input element
  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  const [foundPerson, setFoundPerson] = useState([])


  // fetch people data from ghibliapi and set returned data to updated useState people list - setPeople - w/ catch for any 404 errors
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  
  // create EVENT on handleSubmit that wont refresh the page  - when updated useState for user input value changes - setInput
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoundPerson(people.filter(person => person.name.toUpperCase() === input.toUpperCase()))
  }


  console.log(foundPerson);
  return (
    <div>
      <h1 className="people">Search for a Person</h1>
      {/* handleSumbit EVENT will run on - form - onSubmit */}
      <form onSubmit={handleSubmit}>
        {/* depending on the user input update the useState with new value  */}
        <input onChange={handleChange} type="text" value={input} ></input>
        <button>Submit</button>
      </form>
      {/* transfer that person searched by the user to the PeopleCard Component */}
      { foundPerson.length > 0 ? (<PeopleCard foundPerson={foundPerson}/>) : (<h1>Not Found</h1>)}
    </div>
  );
}

export default People;
