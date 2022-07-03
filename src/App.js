import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import People from "./components/People/People";
import Locations from "./components/Locations/Locations";

const App = () => {
  const [allPeople, setAllPeople] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((data) => {
        setAllPeople(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((res) => res.json())
      .then((data) => {
        setAllLocations(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <main className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={
                <Movies allMovies={allMovies} setAllMovies={setAllMovies} />
              }
            />
            <Route
              path="/people"
              element={
                <People allPeople={allPeople} setAllPeople={setAllPeople} />
              }
            />
            <Route
              path="/locations"
              element={
                <Locations
                  allLocations={allLocations}
                  setAllLocations={setAllLocations}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
