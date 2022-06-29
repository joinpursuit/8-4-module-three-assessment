import React from 'react'
import { useEffect, useState } from "react"


function People() {

  let [people, setPeople] = useState([])
  let [peopleInput, setPeopleInput] = useState('')
  let [peopleSelection, setPeopleSelection] = useState({})
  let [peopleSelector, setPeopleSelector] = useState(false)

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((data) => data.json())
      .then((people) => setPeople(people))
      .catch((error) => console.log("error"));
  }, []);

  const onSubmit = () => {
    peopleSelection = people.find((peoples) => peoples.name.toLowerCase() === peopleInput.toLowerCase());
    if (peopleSelection && Object.keys(peopleSelection).length) {
      setPeopleSelection(peopleSelection);
    } else {
      setPeopleSelection({});
    }

    setPeopleInput('')
    setPeopleSelector(true)
  }
  return (
    <div className="hometitle">
      <div >
        <h2>Search for a Person</h2>
        <input type="text" value={peopleInput} onChange={(event) => setPeopleInput(event.target.value)}></input>
        <button onClick={onSubmit}>Submit</button>
      </div>
      {peopleSelector && (
        (Object.keys(peopleSelection).length === 0)
          ? (<div> 
            <p> Not found</p>
          </div>)
          : (<div> 
            <p>Name:{peopleSelection.name}</p>
            <p>Age:{peopleSelection.age}</p>
            <p>Gender:{peopleSelection.gender}</p>
          </div>)
      )}

    </div>
  )
}
export default People