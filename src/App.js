import logo from "./logo.svg";
//import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import { nav as Nav } from "./components/nav";
import { home as Home } from "./components/home";
import { Movies } from "./components/movieList";
import { People as People } from "./components/people";
import { Locations } from "./components/locations";

function App() {
  //useEffect in indivdual components to fetch the relevant data

  return (
    <div className="app">
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
