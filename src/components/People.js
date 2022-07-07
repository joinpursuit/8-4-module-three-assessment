import React from "react";
import { useEffect, useState } from "react";
import "./People.css";

export default function People() {
  const [search, setSearch] = useState([]);
  const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(
      people.find((person) => person.name.toLowerCase() === input.toLowerCase())
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const personDescription = !search ? (
    "Not Found"
  ) : (
    <div>
      <h2>Name: {search.name}</h2>
      <h3>Age: {search.age}</h3>
      <h3>Eye Color: {search.eye_color}</h3>
      <h3>Hair Color: {search.hair_color}</h3>
    </div>
  );

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Submit</button>
        <section>{personDescription}</section>
      </form>
    </div>
  );
}
