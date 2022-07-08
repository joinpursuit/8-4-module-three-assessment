import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";

export default function People() {
    const [people, setPeople] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState();
  const [submit,setSubmit] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const showPerson = people.find(
      person => person.name.toLowerCase() === input.toLowerCase()
    );
    setSearch(showPerson);
    setInput("")
    setSubmit(true)
  };


  return (
    <div className="people">
      <label>
        Search for a Person
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
      </label>
      {search && submit ? <PersonCard search={search} /> : !search && submit? <p>Not Found</p> : null }
    </div>
  );

}
