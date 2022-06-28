import React from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home"
import MoviesIndex from "./Components/Movies/MoviesIndex"
import PeopleIndex from "./Components/People/PeopleIndex"
import LocationsIndex from "./Components/Locations/LocationsIndex"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/people" element={<PeopleIndex />} />
          <Route path="/locations" element={<LocationsIndex />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
