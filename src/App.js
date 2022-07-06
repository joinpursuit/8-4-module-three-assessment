// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={
                <main>
                  <h1>Welcome to GhibliApp</h1>
                </main>
              } />
              <Route path="/movies" element={<Movies />} />
              <Route path="/people" element={<People />} />
              <Route path="/locations" element={<Locations />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
