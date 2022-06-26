import React from 'react';
// import index from "../index.css"
import { Link } from "react-router-dom";
import Logo from "./Logo.js";

const Navigation = () => {
  return (
    <nav >
        <div className="navbar">
            <Logo />
            <h5>
                <Link className="link" to="/movies">Movies</Link>
            </h5>
            <h5>
                <Link  className="link" to="/people">People</Link>
            </h5>
            <h5>
                <Link className="link" to="/locations">Locations</Link>
            </h5>
        </div>

    </nav>
  )
}

export default Navigation;



// should include the links for components ("Movies", "People", "Locations") and should go to related routes (/movies) (/people) (/locations)