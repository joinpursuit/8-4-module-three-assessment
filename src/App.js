// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {

  const [movie, setMovie] = useState([]);
  const [people, setPeople] = useState([]);
  const [location, setLocation] = useState([]);

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies movie={ movie } setMovie={ setMovie } />} />
              <Route path="/people" element={<People people={ people } setPeople={ setPeople }/>} />
              <Route path="/locations" element={<Locations location={ location } setLocation={ setLocation }/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
