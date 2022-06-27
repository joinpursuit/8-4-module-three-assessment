import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <Link className="link" to="/">
          <Logo />
        </Link>
        <Link className="link" to="/movies">
          <h5>Movies</h5>
        </Link>
        <Link className="link" to="/people">
          <h5>People</h5>
        </Link>
        <Link className="link" to="/locations">
          <h5>Locations</h5>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
