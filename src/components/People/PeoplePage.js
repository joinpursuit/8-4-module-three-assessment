import React from 'react';
// import { useParams } from 'react-router-dom';

const PeoplePage = ({ people, search }) => {
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
    <div>
        <h2><strong>Name:</strong>{}</h2>
        <p><strong>Age:</strong>{}</p>
        <p><strong>Eye Color:</strong>{}</p>
        <p><strong>Hair Color:</strong>{}</p>
    </div>
  )
}

export default PeoplePage;