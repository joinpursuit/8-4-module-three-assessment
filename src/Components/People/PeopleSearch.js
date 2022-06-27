import React, {useState, useEffect} from 'react'
import "./PeopleSearch.css"

export default function PeopleSearch() {

  const [input, setInput] = useState("")
  const [people, setPeople] = useState([])

  useEffect(()=> {
    fetch(
      "https://ghibliapi.herokuapp.com/people"
    )
    .then((response) => response.json())
    .then((data) => setPeople(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
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
        {people.map((person)=>{
          if(person.name.toLowerCase() === input.toLowerCase()){
            return (
              <div className='peopleInfo'>
                <h2>Name: {person.name}</h2>
                <h4>Age: {person.age}</h4>
                <h4>Gender: {person.gender}</h4>
              </div>
            )
          }
        })}
      </p>
    </div>
  )
}
