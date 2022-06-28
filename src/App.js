import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className='container'>
      <Router>
      <div className="header">
        <Nav />
        </div>
        <div className="main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/people' element={<People />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
