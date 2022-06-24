import { React, useEffect, useState } from "react";

// Include a dropdown list as well to choose, maybe
// you don't know any characters?

export const People = () => {
  const [query, setQuery] = useState();
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const personSearch = people.find(
      (person) => person.name.toLowerCase() === query
    );
    console.log(personSearch);
    if (!personSearch) {
      alert("Person not found");
    }

    setQuery("");
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div className="people">
      <h1>Search for a character</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Enter search here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search!</button>
      </form>
      <div className="person"></div>
    </div>
  );
};
