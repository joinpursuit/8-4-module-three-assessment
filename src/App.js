import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import People from "./Components/People";


function App() {
  return (
    <div className="GhibliApp">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/people' element={<People/>}/>
          <Route path='/locations' element={<Locations/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
