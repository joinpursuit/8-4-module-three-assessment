/** @format */

const baseURL = 'https://ghibliapi.herokuapp.com';

async function getGhibliFilms() {
	const response = await fetch(`${baseURL}/films`);
	const data = await response.json();

	return data;
}

const ghibliFilms = getGhibliFilms();

export default ghibliFilms;
