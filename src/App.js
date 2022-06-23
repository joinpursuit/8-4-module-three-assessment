import "./App.css";
import Home from "./Common/Home";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import Locations from "./Components/Locations/Locations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
