// import logo from "./logo.svg";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies/Movies";
import People from "./components/People/People";
import Locations from "./components/Locations/Locations";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation/>
    <div className="grid">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/locations" element={<Locations/>} />

      </Routes>
      
      
    </div>

    </Router>
  );
}

export default App;
