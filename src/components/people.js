import { React, useEffect, useState } from "react";

export const People = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div>
      <h1>Search for a character</h1>
      <form>

      </form>
    </div>
  );
};
