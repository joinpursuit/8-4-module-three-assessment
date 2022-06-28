import "./App.css";
import logo from "./logo.svg"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/locations" element={<Locations/>} />
      </Routes>
     </div>
    </>
  );
}

export default App;
