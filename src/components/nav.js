import React from "react";
import { Link } from "react-router-dom";

export const nav = () => {
  return (
    <>
      <ul>
        <li>
            <Link to="/">Home</Link>
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
    </>
  );
};
