import { useEffect, useState } from "react";
import Person from "./Person";
import "./People.css"

const People = () => {
  const [userRequest, setUserRequest] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const foundPerson = people.find(person => person.name.toLowerCase() === userRequest.toLowerCase());

    if(!foundPerson){
      setError(true)
    };

    setPerson(foundPerson);
    setUserRequest("");
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
      {error ? "Not Found" : null}
    </div>
  );
};

export default People;
