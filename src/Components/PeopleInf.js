import React from 'react'

export default function PeopleInf({cruise}) {
    // const peopleOption = people.find((people) =>people.id === people)
    
    console.log(cruise)
  return (
    <div>
      <p>Name: {cruise[0].name}</p>
      <p>Age: {cruise[0].age}</p>
      <p>Eye-Color: {cruise[0].eye_color}</p>
      <p>hair-Color: {cruise[0].hair_color}</p>
    </div>
  )
}