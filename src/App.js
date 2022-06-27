import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";



function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
