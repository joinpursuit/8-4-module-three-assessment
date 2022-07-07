import React, { useEffect, useState } from "react";
import "./People.css";
import PersonCard from "./PersonCard";

function People() {
  const [people, setPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState({ id: null });

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.search.value.toLowerCase();
    const searchedPerson = people.find(
      ((person) => {
        return person.name.toLowerCase() === name;
      }) || { id: null }
    );
    setSearchPerson(searchedPerson);
    form.reset();
   
  };

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit} className="form__container">
        <input id="name" name="search" type="text" />
        <button type="submit">search person</button>
      </form>
      <aside>
        {!searchPerson.id ? (
          <p>Please enter a person's name!</p>
        ) : (
          <>
            <PersonCard searchPerson={searchPerson} />
          </>
        )}
      </aside>
    </div>
  );
}

export default People;
