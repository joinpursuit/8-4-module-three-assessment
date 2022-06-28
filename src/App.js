import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Movie from "./components/Movie.js";
import People from "./components/People.js";
import LocationSearch from "./components/Location.js";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/people" element={<People />} />
        <Route path ="/location" element= {<Location/>}/>
      </Routes>
    </div>
  </Router>
);
}

 
