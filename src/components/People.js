import React from 'react'
import { useState, useEffect } from 'react';

const url = 'https://ghibliapi.herokuapp.com/people';
const People = () => {
  const [people, setPeople] = useState([])
  const [search, setSearch] = useState('')
  const [person, setPerson] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const fetchPeople = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  };

console.log(people)

  useEffect(() => {
    fetchPeople();
  }, []);
  
  const handleChange = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   
      const person = people.find(
        (person) =>
          search && person.name.toUpperCase().includes(search.toUpperCase())
      );
    
      setPerson(person)
      setSearch('')
      setHasSearched(true)
    
  }
  




  return (
    <div className="people">
      <p>Search for a Person</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
      {!person && hasSearched && 'Not Found'}
      {person && (
        <div>
          <h1>{`Name: ${person.name}`}</h1>

          <p>{`Age: ${person.age}`}</p>
          <p>{`Gender: ${person.gender}`}</p>
          <p>{`Hair Color: ${person.hair_color}`}</p>
        </div>
      )}
    </div>
  );
}

export default People