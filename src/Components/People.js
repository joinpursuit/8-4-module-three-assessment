import React, { useState, useEffect } from 'react';

export default function People() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState({ id: null });

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((peopleData) => peopleData.json())
      .then((people) => setPeople(people));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.search.value.toLowerCase();
    const personFound = people.find((person) => {
      return person.name.toLowerCase() === name;
    }) || { id: null };
    setSelectedPerson(personFound)
    form.reset();
  };
   
  const results = (
   <div> 
    <p>
      <span>Name: </span> {selectedPerson.name}
      </p>
    <p>
      <span>Eye Color: </span>{selectedPerson.eye_color}
      </p>
    <p>
      <span>Hair Color: </span>{selectedPerson.hair_color}
      </p>
    </div>

  );

  return (
    <section>
      <h2>Search for a Person</h2>
      <form onSubmit={ handleSubmit }>
        <input id="search" name="search" type="text" />
        <button type="submit">Select a Person</button>
      </form>
      <aside>
        {!selectedPerson.id ? ( <p>not  found</p> 
        ) : (
          <> { results } </>
        )}   
      </aside>
   </section>
  );
}
