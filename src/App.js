import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [films, setFilms] = useState([]);
 
  useEffect(() => {
    fetch(
      `https://ghibliapi.herokuapp.com/films/`
    )
      .then((response) => response.json())
      .then((data) => setFilms(data));
  });
  
  return (
    <div className="App">
      <nav className="Navbar">
        <Navbar />
      </nav>
        <div className="movies">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies films={films}/>} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </div>
    </div>
  );
}
export default App;