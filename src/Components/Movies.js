/** @format */

import React, { useState } from 'react';

const Movies = (props) => {
	const { ghibliFilms } = props;
	const [ghibliFilmTitles, setGhibliFilmTitles] = useState();

	const filmTitles = ghibliFilms.map((film) => {
		return (
			<option key={film.id} value={film.title}>
				{film.title}
			</option>
		);
	});

	const handleChange = (e) => {
		if (e.target.value === '') {
			setGhibliFilmTitles('');
		} else {
			const releaseDate = ghibliFilms
				.filter((film) => film.title === e.target.value)
				.map((film) => film.release_date);
			const description = ghibliFilms
				.filter((film) => film.title === e.target.value)
				.map((film) => film.description);
			setGhibliFilmTitles(
				<div className='movie-description'>
					<h2>
						Title: <span>{e.target.value}</span>
					</h2>
					<h4>Release Date: </h4> {releaseDate}
					<h4>Description: </h4> {description}
				</div>
			);
		}
	};

	return (
		<div className='movies'>
			<h2>Select a Movie</h2>
			<form>
				<select onChange={handleChange}>
					<option value=''></option>
					{filmTitles}
				</select>
			</form>
			{ghibliFilmTitles}
		</div>
	);
};

export default Movies;
// {(e) => setGhibliFilmTitles(filmTitles)}
