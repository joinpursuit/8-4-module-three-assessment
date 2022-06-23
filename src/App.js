/** @format */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
	return (
		<div className='ghibli-app'>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}
<h1>Welcome to GhibliApp</h1>;
export default App;
