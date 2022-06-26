import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./images/ghibli-logo.png";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" width="50px" height="50px" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>

    //   <ul className="Nav-ul">

    //   <li className="Nav-li">
    //     <Link to="/"><img src={logo} alt="logo" width="50px" height="50px" /></Link>
    //   </li>

    //   <li>
    //     <Link to="/movies">Movies</Link>
    //   </li>

    //   <li>
    //     <Link to="/people">People</Link>
    //   </li>
    //   <li>
    //     <Link to="/locations">Locations</Link>
    //   </li>
    // </ul>
  );
}
