
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import People from "./components/People";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/people' element={<People />}></Route>
            <Route path='/locations' element={<Locations />}></Route>
            
          </Routes>
        </Router>
     
      </header>
    </div>
  );
}

export default App;
