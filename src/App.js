import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";
import "./App.css";

function App() {

  const [ allGhibliFilms, setAllGhibliFilms ] = useState([]);
  const baseURL = 'https://ghibliapi.herokuapp.com';

  useEffect(() => {
    async function listGhibliFilms() {
      const results = await fetch(`${baseURL}/films`);
      const ghibliFilmsResults = await results.json(results);
      setAllGhibliFilms(ghibliFilmsResults);
    }
    listGhibliFilms();
  }, []);

    console.log(allGhibliFilms);

  return (
    <div className='ghibli-app'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies allGhibliFilms={allGhibliFilms} />} />
          <Route path='/people' element={<People />} />
          <Route path='/locations' element={<Locations/>} />
        </Routes>
      </Router>
    </div>
  );
 
}



export default App;
