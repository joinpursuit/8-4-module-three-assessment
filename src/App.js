// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Nav from "./Components/Nav";
import People from "./Components/People";
import Locations from "./Components/Locations";
// import LocationContainer from "./Components/LocationContainer";
// import MovieInfo from "./Components/MovieInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/*" element={<Error />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
