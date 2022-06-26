import React, { useEffect, useState } from 'react';


const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then((response) => response.json())
    .then((data) => setPeople(data))
    .catch((error) => console.log(error))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    setPeople(event.target.value)
  }




  return (
    <div className="people">
        <h1> Search for a Person </h1>
        <form onSubmit={handleSubmit}>
          <input type="text"   placeholder="Search a Person"/>
          <button type="submit">SUBMIT</button>
        </form>

    </div>
  )
}

export default People;

// has a form that includes a text input and a submit button. use a button for the submit 
// after  typing a name into the txt field and submitting, the characters name age and gender should be shown on page...form should also clear
// if the search does not have no results the tet "Not Found" should show...