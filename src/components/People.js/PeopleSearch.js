import React from 'react'

export default function PeopleSearch({ search }) {
  return (
    <div className="search">
      <h1>Name: {search.name}</h1>
      <p>
        <span style={{fontWeight: 'bold'}}>Age: </span>
        {search.age}
      </p>
      <p>
        <span style={{fontWeight: 'bold'}}>Eye Color: </span>
        {search.eye_color}
      </p>
      <p>
        <span style={{fontWeight: 'bold'}}>Hair Color: </span>
        {search.hair_color}
      </p>
    </div>
  );
}