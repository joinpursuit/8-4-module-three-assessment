/** @format */

import React, { useState, useEffect } from 'react';

const People = (props) => {
	const { ghibliPeople } = props;

	const [searchPerson, setSearchPerson] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		const { value } = e.target;
		const person = ghibliPeople
			.filter((person) => person.name === value)
			.map((person) => person.name);
		console.log(person);

		if (value === '' || value !== person.name) {
			setSearchPerson('');
		} else {
			const personGender = ghibliPeople
				.filter((person) => person.name === value)
				.map((person) => person.gender);
			console.log(personGender);
			setSearchPerson(<h2>{personGender}</h2>);
			console.log(searchPerson);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log();
	};

	return (
		<div className='people'>
			<h2>Search for a Person</h2>
			<form onSubmit={handleFormSubmit}>
				<input
					id='person'
					name='person'
					type='text'
					value={searchPerson}
					onChange={(e) => setSearchPerson(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
			{searchPerson}
		</div>
	);
};

export default People;
