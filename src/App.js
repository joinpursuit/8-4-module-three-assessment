import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Movies from "./components/Movies/Movies"
import People from "./components/People/People";
import Locations from "./components/Locations/Locations";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path ="/locations" element= {<Locations/>}/>
      </Routes>
    </div>
  </Router>
);
}

 
