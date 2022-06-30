import React, { useEffect, useState } from 'react';
import PeoplePage from './PeoplePage';
import "./People.css";

const People = () => {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [actorsFound, setActorsFound] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then((response) => response.json())
    .then((data) => setPeople(data))
    .catch((error) => console.log(error))
  },[people, search])

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSearch(event.target.value)
    setActorsFound(people.filter((person) => {
      return (person.name.toLowerCase() === search.toLowerCase())
    }))
    if (actorsFound.length > 1) {
      setNotFound("Not Found");
    }
    setSearch("")
  }


  const handleChange = (event) => {
    setSearch(event.target.value)
  }
// console.log(people);
// const searchedPerson = people.find((person) => {
//   return person.name === search;
// })



  return (
    <div className="people">
        <h1> Search for a Person </h1>
        <form onSubmit={handleSubmit}>
          <input className="inp" type="text"   value={search} onChange={handleChange} placeholder="Search a Person"/>
          <button className="btn" type="submit">SUBMIT</button>
        </form>
        {actorsFound.length > 0 ? (<PeoplePage actorsFound={actorsFound}/>) : (<h1>{notFound}</h1>)}

    </div>
  )
}

export default People;

// has a form that includes a text input and a submit button. use a button for the submit 
// after  typing a name into the txt field and submitting, the characters name age and gender should be shown on page...form should also clear
// if the search does not have no results the tet "Not Found" should show...