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
            setPeople(data)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [setPeople]);

      const handleSubmit = (e) => {
        e.preventDefault()
      }

      const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
      }

      const personDescription = input === people ? (
        <div>
          <h2>Name: { people.name }</h2>
          {/* <h3>Age: { input.age }</h3>
          <h3>Gender: { input.gender }</h3> */}
        </div>
      ) : null;

  return (
    <div className='people'>
      <h1>Search for a Person</h1>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleChange }/>
        <button>Submit</button>
        <section>{ personDescription }</section>
      </form>
    </div>
  )
}