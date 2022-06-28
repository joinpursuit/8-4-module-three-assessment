import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
      <nav className="navbar">
      <div className="logo"> <Link to="/">
          <img
            src="https://www.freepik.com/premium-vector/click-movie-logo-vector_4078385.htm"
            width={50} height={50}
            alt="logo50"
          />
        </Link></div>
        <div> <Link to="/movies">
          <h2>Movies</h2>
        </Link> </div>
        <div> <Link to="/people">
          <h2>People</h2>
        </Link></div>
        <div> <Link to="/locations">
          <h2>Locations</h2>
        </Link></div>
      </nav>
  );
}
export default Navbar;