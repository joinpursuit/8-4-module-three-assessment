import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
// import {logo} from "./logo.png";
import Logo from "./Logo";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <Logo />
      </Link>
      <Link to="/movies" className="nav__element">
        Movies
      </Link>
      <Link to="/people" className="nav__element">
        People
      </Link>
      <Link to="/locations" className="nav__element">
        Locations
      </Link>
    </nav>
  );
}

export default Nav;
