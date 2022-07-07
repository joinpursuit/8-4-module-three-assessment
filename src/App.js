import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Movies from "./Components/Movie/Movies";
import People from "./Components/People/People";
// import ShowByContainer from "./Components/Location/ShowByContainer";
import "./App.css"
import LocationsList from "./Components/Location/LocationsList";

function App() {
  return (
    <div className="app">
      <Router>
        <nav className="app-header">
          <Nav />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<LocationsList />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
