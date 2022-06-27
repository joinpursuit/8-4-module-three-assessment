import React from 'react';
// import { useParams } from 'react-router-dom';

const PeoplePage = ({ actors }) => {
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
        <h2><strong>Name:</strong>{actors[0].name}</h2>
        <p><strong>Age:</strong>{actors[0].age}</p>
        <p><strong>Eye Color:</strong>{actors[0].eye_color}</p>
        <p><strong>Hair Color:</strong>{actors[0].hair_color}</p>
    </div>
  )
}

export default PeoplePage;