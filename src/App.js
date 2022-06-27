import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from  "./Components/Movies" 
import People from "./Components/People";
import Location from "./Components/Location";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Nav />
      </nav>
      <main >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={< Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Location />} />
     </Routes>
      </main>
    </div>
  );
}

export default App;
