import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);

  // const getMovies = () => {
  //   fetch("")
  //     .then((data) => data.json())
  //     .then((json) => {
  //       setMovies(json);
  //     });
  // };

  // useEffect(() => {
  //     getMovies()
  // }, )

  fetch(``)
    .then((data) => data.json())
    .then((json) => {
      setMovies();
    });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
