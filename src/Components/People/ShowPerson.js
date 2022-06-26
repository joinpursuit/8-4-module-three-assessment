import React from 'react';

export default function ShowPerson({ foundPerson }) {
    if (foundPerson === undefined ) {
        return null
    }
    if (foundPerson === 'Not found') {
        return <h2>Not Found</h2>
    }
    if (Object.keys(foundPerson).length > 0) {
        console.log('true!!')
        return (
            <>
                <h2>Name: {foundPerson.name}</h2>
                <p><span>Age: </span>{foundPerson.age}</p>
                <p><span>Gender: </span>{foundPerson.gender}</p>
                <p><span>Eye Color: </span>{foundPerson.eye_color}</p>
            </>
        )
    }

}

