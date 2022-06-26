import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo.js";

const Navigation = () => {
  return (
    <nav className="navbar">
        <div>
            <Logo />
            <h5>
                <Link to="/movies">Movies</Link>
            </h5>
            <h5>
                <Link to="/people">People</Link>
            </h5>
            <h5>
                <Link to="/locations">Locations</Link>
            </h5>
        </div>

    </nav>
  )
}

export default Navigation;



// should include the links for components ("Movies", "People", "Locations") and should go to related routes (/movies) (/people) (/locations)