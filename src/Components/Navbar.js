import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
      <nav className="navbar">
      <div className="logo"> <Link to="/">
          <img
            src="https://st2.depositphotos.com/1010751/8237/v/600/depositphotos_82376536-stock-illustration-movie-film-strip-logo.jpg"
            width={50} height={50}
            alt="youtubelogo"
          />
        </Link></div>
        <div> <Link to="/movies">
          <h6>Movies</h6>
        </Link> </div>
        <div> <Link to="/people">
          <h6>People</h6>
        </Link></div>
        <div> <Link to="/locations">
          <h6>Locations</h6>
        </Link></div>
      </nav>
  );
}
export default Navbar;