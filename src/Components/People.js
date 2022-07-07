import { useEffect, useState } from "react";
import "./People.css";


export default function People() {
  const [inputSearch, setInputSearch] = useState("");
  const [searchPerson, setSearchPerson] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/`)
      .then((response) => response.json())
      .then((data) => setPeople(data));
  });

  const handleClick = (event) => {
    event.preventDefault();
    setSearchPerson(people.find((person) => person.name.toLowerCase() === inputSearch.toLowerCase()));
    console.log(searchPerson);
    setInputSearch("");
  };
  return (
    <section className="people">
      <form onClick={handleClick}>
        <h2>Search for a Person</h2>
        <input
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
          type="text"
        ></input>
        <button>SUBMIT</button>
      </form>
      {searchPerson ? (
        <>
          <h2>Name: {searchPerson.name}</h2>
          <p>
            <strong>Age: </strong>
            {searchPerson.age}
          </p>
          <p>
            <strong>Eye Color: </strong> {searchPerson.eye_color}{" "}
          </p>
          <p>
            <strong>Hair Color: </strong>
            {searchPerson.hair_color}
          </p>
        </>
      ) : (
        "Not Found"
      )}
    </section>
  );
}