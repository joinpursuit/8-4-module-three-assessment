import React from "react";
import { Link } from 'react-router-dom'
import logo from "../logo.svg";

export default function Navbar() {
    return (
        <header className="navbar">
          <h1>Movie Reviews</h1>
          <nav>
            <Link to="/">
              <div>
                <img src={logo} alt='GhibliApp logo' className="logo" />
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