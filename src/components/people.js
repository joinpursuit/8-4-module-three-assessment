import { React, useEffect, useState } from "react";

import { Person } from "./person";

// Include a dropdown list as well to choose, maybe
// you don't know any characters?

export const People = () => {
  const [query, setQuery] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const personSearch = people.find(
      (person) => person.name.toLowerCase() === query.toLowerCase()
    );
    setQuery("");
    setPerson(personSearch);
    setVisible(true);
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  // Something of a microcomponent that makes sure there's something to
  // actually show
  const display = () => {
    return visible ? (
      !person ? (
        <p>Not Found</p>
      ) : (
        <Person
          name={person.name}
          gender={person.gender}
          age={person.age}
          eyeColor={person.eye_color}
          hairColor={person.hair_color}
          key={person.id}
        />
      )
    ) : null;
  };
  // You know what's a bad idea? Nesting ternaries. Can get out of hand fast.
  // Think about other ways to do this.

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Enter search here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search!</button>
      </form>
      {display()}
    </div>
  );
};
