import React from "react";
import { Link } from "react-router-dom";
const not = {
  color: "white",
  textDecoration: "none",
  fontSize: "30px",
};
export default function Nav() {
  return (
    <nav>
      <div className="Nav">
        <Link to="/">
          <img
            alt="icon"
            src="https://cdn-icons-png.flaticon.com/512/16/16027.png"
            width="50px"
            height="50px"
          ></img>
        </Link>
        <Link to="/movies" style={not} className="mov">
          Movies
        </Link>
        <Link to="/people" style={not}>
          People
        </Link>
        <Link to="/locations" style={not}>
          Locations
        </Link>
      </div>
    </nav>
  );
}