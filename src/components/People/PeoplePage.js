import React from 'react';
// import { useParams } from 'react-router-dom';

const PeoplePage = ({ actorsFound }) => {
  const [actors] = actorsFound;
        // const { id } = useParams();
        // console.log(people)
        // const searchedPerson = people.find((person) => {
        //     return person.name === search;
        // })

        // if (!searchedPerson){
        //     return (
        //     <p>Not Found</p>
        //     )
        // }
        // console.log(searchedPerson)
  return (
    <div className='person'>
        <h2><strong>Name:</strong>{actors.name}</h2>
        <p><strong>Age:</strong>{actors.age}</p>
        <p><strong>Eye Color:</strong>{actors.eye_color}</p>
        <p><strong>Hair Color:</strong>{actors.hair_color}</p>
    </div>
  )
}

export default PeoplePage;
// ------