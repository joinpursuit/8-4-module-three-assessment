import React, { useState } from "react";
import "./People.css"

export default function People({ allPeople }) {
  const [userInput, setUserInput] = useState("");
  const [found, setFound] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFound(
      allPeople.find(
        (people) =>
          people.name === `${userInput[0].toUpperCase() + userInput.slice(1)}`
      )
    );
    setUserInput("");
  };

  const peopleInfo = () => {
    if (found === undefined) {
      return (
        <p>
          <strong>Not Found</strong>
        </p>
      );
    } else if (Object.keys(found).length >= 1 && found) {
      return (
        <div className="people-infoBox">
          <p>
            <strong>Name:</strong> {found.name}
          </p>
          <p>
            <strong>Age:</strong> {found.age}
          </p>
          <p>
            <strong>Eye Color:</strong> {found.eye_color}
          </p>
          <p>
            <strong>Hair Color:</strong> {found.hair_color}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <button id="people-button" type="submit">SUBMIT</button>
      </form>
      {peopleInfo()}
    </div>
  );
}
