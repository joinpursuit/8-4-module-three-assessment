
import "./App.css";

import Nav from "./component/Nav/Nav"
import Home from "./component/Home/Home"
import Movies from "./component/Movies"
import People from "./component/People/People"
import Locations from "./component/Location/Locations"

import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Router>

      <Nav/>

     

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/people" element ={<People setSearch={setSearch}/>}/>
      <Route path="/location"element ={<Locations/>}/>
       </Routes>

      </Router>
    </div>
  );
}

export default App;
