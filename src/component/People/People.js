import React, { useState } from "react";
import "./People.css";
import Person from "./Person";

const People = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    fetch(
      "https://ghibliapi.herokuapp.com/people"
    )
      .then((response) => response.json())
      .then((people) => {
        console.log(people)
        debugger
        setPeopleData(people);
      })
      .catch((err) => {
        console.log(err);
      });


  };


  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  

  return (
    <div className="people">
      <form onSubmit={handleSubmit}>
        <h1>Search for a Person</h1>
        <input onChange={handleSearch}  type="text" />
        <button>SUBMIT</button>
        <div className = "result">
          
          {peopleData.map((person) => {
            if (person.name.toLowerCase() === search.toLowerCase()) {
              return (
                <Person key = {person.id}
                  name={person.name}
                  age={person.age}
                  eyeColor={person.eye_color}
                  hairColor={person.hair_color}
                />
              );
            }
          }
          )}
        </div>
      </form>
    </div>
  );
};

export default People;
