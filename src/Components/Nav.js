import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import React from "react";

export default function Nav() {
  return (
    <nav>
    <div className="nav">
      <Link to="/">
        {" "}
        <FaHome size="2em" color="black" />{" "}
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </div>
    </nav>
  );
}
