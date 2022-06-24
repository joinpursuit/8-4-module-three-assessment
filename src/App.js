import "./App.css";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

    const [movies, setMovies] = useState([])
    const [people, setPeople] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(()=>{

      fetch(

      )



    })



  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/locations" element={<Locations/>}/>
    </Routes>
     
        
    </div>
    </Router>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" /> */}