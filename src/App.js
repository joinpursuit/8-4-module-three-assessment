import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Movies from './Component/Movies';
import People from './Component/People';
import Locations from './Component/Locations';

import {Routes, Route,} from "react-router-dom";

function App() {


  return (
    <div className="grid">
     <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/people" element={<People />}/>
        <Route path="/locations" element={<Locations />}/>
      </Routes>
    </div>
  );
}


export default App;
