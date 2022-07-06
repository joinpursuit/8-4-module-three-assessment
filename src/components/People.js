import React from 'react';
import { useEffect, useState } from 'react';
import "./People.css";

export default function People() {

  const [people, setPeople] = useState([]);

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

      // const handleChange = (e) => {
      //   setPeople(e.target.value)
      // }

  return (
    <div className='people'>
      <h1>Search for a Person</h1>
      <form>
        <input value={ people }/>
        <button>Submit</button>
      </form>
    </div>
  )
}


//Will need a map method in the return
//Name, Age, Eye Color, Hair Color