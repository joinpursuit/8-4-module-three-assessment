import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./images/ghibli-logo.png"

export default function Nav() {
  return (
    <ul>
    <li>
      <Link to="/"><img src={logo} alt="logo" width="50px" height="50px" /></Link>
    </li>

    <li>
      <Link to="/movies">Movies</Link>
    </li>

    <li>
      <Link to="/people">People</Link>
    </li>
    <li>
      <Link to="/locations">Locations</Link>
    </li>
  </ul>
  )
}
