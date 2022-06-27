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
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
