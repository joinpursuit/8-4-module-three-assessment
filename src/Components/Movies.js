/** @format */

import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

const Movies = (props) => {
	const { ghibliFilms } = props;

	const [ghibliFilmTitles, setGhibliFilmTitles] = useState(null);

	ghibliFilms.then((film) => {
		return film.map((film) => {
			return film.title;
		});
	});

	const handleChange = (value) => {
		setGhibliFilmTitles(value);
		return (
			<>
				<h2>test</h2>
			</>
		);
	};

	const loadOptions = () => {
		return ghibliFilms;
	};

	return (
		<div className='movies'>
			<h2>Select a Movie</h2>
			<AsyncSelect
				cacheOptions
				defaultOptions
				value={ghibliFilmTitles}
				getOptionLabel={(e) => e.title}
				getOptionValue={(e) => e.id}
				loadOptions={loadOptions}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Movies;
