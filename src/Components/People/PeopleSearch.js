import React, {useState, useEffect} from 'react'
import "./PeopleSearch.css"

export default function PeopleSearch() {

  const [input, setInput] = useState("")
  const [people, setPeople] = useState([])
  const [foundPerson, setFoundPerson] = useState()

  useEffect(()=> {
    fetch(
      "https://ghibliapi.herokuapp.com/people"
    )
    .then((response) => response.json())
    .then((data) => setPeople(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const person = people.find((person) => person.name.toLowerCase() === input.toLowerCase())
    setFoundPerson(person)
    setInput("")
  }


  return (
    <div className='people'>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={(e) => setInput(e.target.value)} value={input} type="text"/>
      <button type="submit">Submit</button>
      </form>
      <p>
        {foundPerson ? <div className='peopleInfo'>
                <h2>Name: {foundPerson.name}</h2>
                <h4>Age: {foundPerson.age}</h4>
                <h4>Eye Color: {foundPerson["eye_color"]}</h4>
              </div> : <div><p>Not Found</p></div>}
      </p>
    </div>
  )
}
