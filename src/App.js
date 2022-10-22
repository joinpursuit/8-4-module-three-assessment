import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

// Components
import NavBar from "./Components/NavBar";
import Home from './Components/Home/Home'
import MoviesIndex from './Components/Movies/MoviesIndex';
import LocationsIndex from './Components/Locations/LocationsIndex';
import PeopleIndex from './Components/People/PeopleIndex';

export default function App() {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [locations, setLocations] = useState([]);


  function getPeople() {
    return fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((response) => response.json())
      .then((data) => { //
        setPeople(data)
      })
  }

  function getFilms() {
    return fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((response) => response.json())
      .then((data) => { //
        setFilms(data)
      })
  }

  function getLocations() {
    return fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((response) => response.json())
      .then((data) => { //
        setLocations(data)
      })
  }

  useEffect(() => {
    getPeople();
    getFilms();
    getLocations();
  }, [])

  return (
    <div className="App">
      <nav >
        < NavBar />
      </nav>
      <div className='background-added'>
      <main className="App-div">
        <Routes >
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/movies" element={< MoviesIndex films={films} />} />
          <Route exact path="/people" element={< PeopleIndex people={people} />} />
          <Route exact path="/locations" element={< LocationsIndex locations={locations} />} />
        </Routes>
      </main>
      </div>
      
    </div>
  );
}


