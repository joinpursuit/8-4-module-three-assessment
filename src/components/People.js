import { useEffect, useState } from "react";
import Person from "./Person";

const People = () => {
  const [userRequest, setUserRequest] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const foundPerson = people.find(person => person.name.toLowerCase() === userRequest.toLowerCase())

    setPerson(foundPerson)
    setUserRequest("")
  }

  return (
    <div className="people">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userRequest}
          onChange={(e) => setUserRequest(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {person ? <Person person={person} /> : null}
    </div>
  );
};

export default People;
