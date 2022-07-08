import React from "react";
import { useState, useEffect } from "react";
import PeopleInf from "./PeopleInf";

// import { Link } from 'react-router-dom'

export default function People() {
  const [people, setPeople] = useState([]);
  const [option, setOption] = useState("");
  const [cruise, setCruise] = useState([]);
  const [notFound, setNotFound] = useState("");
  // console.log(people)

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);
  
  function handlePeople(e) {
    e.preventDefault();
    setCruise (people.filter((person) => person.name.toLowerCase() === option.toLowerCase()));
    if (cruise.length < 1) {
      setNotFound("Not Found");
    }
    setOption("");
    
  }
  function change (e) {
    setOption(e.target.value)
  }
  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handlePeople}>
        <input onChange={change} type="text" value={option}></input>
        <button type="submit">
          Submit
        </button>
      </form>
     
        
      {cruise.length > 0 ?  (<PeopleInf cruise={cruise} />) : ( <h2>{notFound}</h2>)}
     
    </div>
  );
}