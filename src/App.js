import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Movies from "./Components/Movies";
import Location from "./Components/Location";
import People from "./Components/People";
import Error from "./Components/Error";

function App() {

  
  return (
    
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/people" element={<People />} />
      <Route path="/location" element={<Location />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
