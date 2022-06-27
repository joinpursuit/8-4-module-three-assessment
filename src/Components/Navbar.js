import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1>Movie Reviews</h1>
      <nav>
        <Link to="/">
          <div>
            <img src="../logo192.png" alt="Logo" className="Logo" />
          </div>
        </Link>
        <h2 className="Navlink">
          <Link to="/movies">Movies</Link>
        </h2>
        <h2 className="Navlink">
          <Link to="/people">People</Link>
        </h2>
        <h2 className="Navlink">
          <Link to="/locations">Locations</Link>
        </h2>
      </nav>
    </header>
  );
}

export default Navbar;
