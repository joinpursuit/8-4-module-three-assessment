import React from 'react';
import { useEffect, useState } from 'react';
import "./People.css";

export default function People() {

  const [people, setPeople] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
          .then((response) => response.json())
          .then((data) => {
            setPeople(data.name)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [setPeople]);

      const handleChange = (e) => {
        const name = e.target.value
        const person = people.find((peeps) => peeps.name === name) || {};
        setInput(person)
      }

      const personDescription = input.name ? (
        <div>
          <h2>Name: { input.name }</h2>
          <h3>Age: { input.age }</h3>
          <h3>Gender: { input.gender }</h3>
        </div>
      ) : null;

  return (
    <div className='people'>
      <h1>Search for a Person</h1>
      <form>
        <input onChange={ handleChange }/>
        <button>Submit</button>
        <section>{ personDescription }</section>
      </form>
    </div>
  )
}


//Will need a map method in the return
//Name, Age, Eye Color, Hair Color