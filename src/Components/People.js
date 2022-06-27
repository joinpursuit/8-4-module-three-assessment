import React, {useEffect, useState} from "react";
import Person from "./Person";

export default function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [input, setInput] = useState("");
  const [human, setHuman] = useState([])
  const [notFound, setNotFound] = useState("")

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((response) => response.json())
      .then((response) => {
        setPeopleData(response);
        console.log(peopleData)
      });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setHuman(peopleData.filter((person) => {
        return (person.name.toLowerCase() === input.toLowerCase())
    }))
    if(human.length < 1){
      setNotFound("Not Found")
    }
  }

  return (
  <div className="people">
    <h2>Search for a Person</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}></input>
        <button>Submit</button>
    </form>
    {human.length > 0 ? (<Person human={human}/>) : (<h2>{notFound}</h2>)}
  </div>
  );
}
