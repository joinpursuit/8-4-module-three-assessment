import React from 'react';
// import { useState, useEffect } from 'react';
import "./People.css";

export default function People({ name, setName }) {
  // const [submit, setSubmit] = useState(false);
  // const [input, setInput] = useState("");

  // useEffect(() => {
  //       fetch("https://ghibliapi.herokuapp.com/people")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setName(data.name)
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //     }, [submit]);

  //     const handleChange = (e) => {
  //       setName(e.target.value)
  //     }
    
  //     const handleSubmit = (e) => {
  //       e.preventDefault()
  //       submit ? setSubmit(false) : setSubmit(true)
  //     }

  return (
    <div className='people'>
      <h1>Search for a Person</h1>
      {/* <form onSubmit={ handleSubmit }>
        <input value={ name } onChange={ handleChange }/>
        <button>Submit</button>
      </form> */}
    </div>
  )
}


//Will need a forEach method in the return