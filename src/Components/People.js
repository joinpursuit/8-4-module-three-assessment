import { useState, useEffect } from "react";
import PersonCard from "./PersonCard";

function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function getPeople() {
      const res = await fetch("https://ghibliapi.herokuapp.com/people");
      const data = await res.json();
      setPeople(
        data.map(({ name, age, hair_color, eye_color }) => ({
          name: name,
          age: age,
          hair_color: hair_color,
          eye_color: eye_color,
        }))
      );
    }
    getPeople();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
    setSubmit(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setFound(search);
    setSearch("");
    setSubmit(true);
  };

  const foundPerson = people.find(
    (person) => person.name.toLowerCase() === found.toLowerCase()
  );
  console.log(search);

  return (
    <div className="search-component">
      <br />
      <form className="search-form" onChange={onChange} onSubmit={onSubmit}>
        <div className="form-controls">
          <input
            onChange={onChange}
            id="video-search"
            value={search}
            type="text"
            placeholder="Enter Name"
          />
          <button type="submit" id="search-button" onSubmit={onSubmit}>
            Submit
          </button>
          <section>
            {foundPerson && submit ? (<PersonCard people={foundPerson} />) 
            : !foundPerson && submit ? ("Not found") : null}
          </section>
        </div>
      </form>
    </div>
  );
}

export default People;
