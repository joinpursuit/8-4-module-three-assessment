import React, { useEffect, useState } from 'react';
import PeoplePage from './PeoplePage';

const People = () => {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then((response) => response.json())
    .then((data) => setPeople(data))
    .catch((error) => console.log(error))
  },[people, search])

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSearch(event.target.value)
    setActors(people.filter((person) => {
      return (person.name.toUpperCase() === search.toUpperCase())
    }))
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
          <input type="text"   value={search} onChange={handleChange} placeholder="Search a Person"/>
          <button type="submit">SUBMIT</button>
        </form>
        {actors.length > 0 ? (<PeoplePage actors={actors}/>) : (<h1>Not Found</h1>)}

    </div>
  )
}

export default People;

// has a form that includes a text input and a submit button. use a button for the submit 
// after  typing a name into the txt field and submitting, the characters name age and gender should be shown on page...form should also clear
// if the search does not have no results the tet "Not Found" should show...