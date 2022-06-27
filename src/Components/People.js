import "./People.css";
import { useEffect, useState } from "react";

export default function People() {
  const [inputSearch, setInputSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/`)
      .then((response) => response.json())
      .then((data) => setPeople(data));
  });

  const handleClick = (e) => {
    e.preventDefault();
    setSearchPerson(people.find((person) => person.name === inputSearch));
    console.log(searchPerson);
    setInputSearch("");
  };
  return (
    <section className="people">
      <form onClick={handleClick}>
        <h2>Search for a Person</h2>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
        ></input>
        <button>SUBMIT</button>
      </form>
      {searchPerson ? (
        <>
          <h6>Name: {searchPerson.name}</h6>
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
