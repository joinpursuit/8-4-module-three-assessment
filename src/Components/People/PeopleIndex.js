import { React, useState } from 'react';
import PeopleForm from './PeopleForm';
import ShowPerson from './ShowPerson';
import './PeopleIndex.css'

export default function PeopleIndex({ people }) {
  const [personValue, setPersonValue] = useState('');
  const [foundPerson, setFoundPerson] = useState([]);
  // console.log(foundPerson)
  return (
    <div className="people">
      <br />
      <h1>Search for a Person</h1>
      <PeopleForm
        people={people}
        personValue={personValue}
        setPersonValue={setPersonValue}
        setFoundPerson={setFoundPerson}
      />
      <article className='person-article' key={foundPerson.id}>
        <ShowPerson foundPerson={foundPerson} />
      </article>
    </div>
  )
}

