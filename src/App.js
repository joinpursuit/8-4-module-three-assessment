/** @format */

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import Locations from './Components/Locations';
import People from './Components/People';
import ghibliFilms from './api/ghibli';

function App() {
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
					<Route path='/people' element={<People />} />
					<Route path='/locations' element={<Locations />} />
				</Routes>
			</Router>
		</div>
	);
}
<h1>Welcome to GhibliApp</h1>;
export default App;
