import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";
import "./App.css";

function App() {
  return (
    <div className='ghibli-app'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/people' element={<People />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </Router>
    </div>
  )
 
}

export default App;
