/** @format */

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import Locations from './Components/Locations';
import People from './Components/People';

function App() {
	const [ghibliFilms, setGhibliFilms] = useState([]);
	const [ghibliPeople, setGhibliPeople] = useState([]);

	const baseURL = 'https://ghibliapi.herokuapp.com';

	useEffect(() => {
		async function fetchGhibliFilms() {
			const response = await fetch(`${baseURL}/films`);
			const fetchedGhibliFilms = await response.json(response);
			setGhibliFilms(fetchedGhibliFilms);
		}
		fetchGhibliFilms();
	}, []);

	useEffect(() => {
		async function fetchGhibliPeople() {
			const response = await fetch(`${baseURL}/people`);
			const fetchedGhibliPeople = await response.json(response);
			setGhibliPeople(fetchedGhibliPeople);
		}
		fetchGhibliPeople();
	}, []);

	return (
		<div className='ghibli-app'>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/movies'
						element={<Movies ghibliFilms={ghibliFilms} />}
					/>
					<Route
						path='/people'
						element={<People ghibliPeople={ghibliPeople} />}
					/>
					<Route path='/locations' element={<Locations />} />
				</Routes>
			</Router>
		</div>
	);
}
<h1>Welcome to GhibliApp</h1>;
export default App;
