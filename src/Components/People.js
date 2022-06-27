import React from "react";
import { getAllPeople } from "../API/fetch";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

export default function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [match, setMatch] = useState('')
  const [didSubmit, setDidSubmit] = useState(false)

  useEffect(() => {
    getAllPeople().then((data) => setPeople(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMatch(search)
    setSearch('')
    setDidSubmit(true)
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
    setDidSubmit(false)
  } 

  const foundPerson = people.find((person) => person.name.toUpperCase() === match.toUpperCase());

  return (
    <div className="people">
      <form className="form">
        <h1>Search for a Person</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          required
        ></input>
        <button onClick={handleSubmit} type="submit" className="submitButton">
          Submit
        </button>
      </form>
      <div>{didSubmit && foundPerson ? <PersonCard foundPerson={foundPerson}/> : didSubmit && !foundPerson ? 'Not Found' : null}</div>
    </div>
  );
}

// used this youtube link to learn the didSubmit state : 
//  https://www.youtube.com/watch?v=8hU0I8rY4u4

