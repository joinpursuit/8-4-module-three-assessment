import React, { useState, useEffect } from "react";
import Error from "./Error";

export default function People() {

  const [people, setPeople] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [eye, setEye] = useState('');
  const [hair, setHair] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((response) => response.json())
      .then((data) => setPeople(data))
  })

  const handleSearch = (event) => {
    event.preventDefault();
    setInput(input)
    // console.log(input.charAt(0).toUpperCase() + input.slice(1))

    //     const ppl = people.find((person) => person.name === input)
    // if(!ppl){
    //   return "not found"
    // }

    people.map((person) => {
      if ((input.charAt(0).toUpperCase() + input.slice(1)) === person.name) {
        setName(`Name: ${person.name}`)
        setAge(`Age: ${person.age}`)
        setEye(`Eye Color: ${person.eye_color}`)
        setHair(`Hair Color: ${person.hair_color}`)
      }
      // else {
      //   setError('not found')
      // }
})

  }

  // const peeps = people.find((ppl) => ppl.name === input)
  // if(!peeps){
  //   return <Error/>
  // }

  // if(!handleSearch){
  //   setError('Not found')
  // }

  return (
    <div className="people">
      <h1>Search for a Person</h1>

      <form onSubmit={handleSearch}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{eye}</h4>
      <h4>{hair}</h4>
      <h1>{error}</h1>
    </div>
  )
}
