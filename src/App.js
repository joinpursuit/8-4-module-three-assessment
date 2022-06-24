// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import Home from "./common/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";


function App() {
  return (
    <Router>
    <div className="App">
      <nav className="nav">
        <Link to="/">
          <img src="https://www.pngkey.com/png/full/198-1987150_totoro-studio-ghibli-logo.png" alt="ghibli-logo" />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="people">People</Link>
        <Link to="locations">Locations</Link>
      </nav>
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
