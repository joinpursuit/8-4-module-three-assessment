import React from 'react'
import { useEffect, useState } from "react"

function People() {

  let [people, setPeople] = useState([])
  let [peopleInput, setPeopleInput] = useState("")
  let [peopleSelector, setPeopleSelector] = useState()

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((data) => data.json())
      .then((people) => setPeople(people))
      .catch((error) => console.log("error"));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault()
    const peopleSelector = people.find((person) => person.name.toLowerCase() === peopleInput.toLowerCase());
    setPeopleSelector(peopleSelector)
    setPeopleInput("")

  }
    ;
  return (
    <div className="people">
      <h2>Search for a Person</h2>

      <input type="text" value={peopleInput} onChange={(event) => setPeopleInput(event.target.value)}></input>
       
      <button onClick={onSubmit}>Submit</button>
      {peopleSelector ?
        <div>
          <p>Name: {peopleSelector.name}</p>
          <p>Age: {peopleSelector.age}</p>
          <p>Eye Color: {peopleSelector.eye_color}</p> </div>
        :
        <div>
          <p> Not Found</p>
        </div>
      }

    </div>
  )
}
export default People