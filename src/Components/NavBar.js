import React from "react";
import ghibliLogoPink from '../images/ghibli-studio-logo-pink.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
            <li>
                <Link to='/' >
                    <img src={ ghibliLogoPink } alt='studio ghibli logo' width='50px' height='50px' />
                </Link>
            </li>
            <li>
                <Link to='/movies'>
                    Movies
                </Link>
            </li>
            <li>
                <Link to='/people'>
                    People
                </Link>
            </li>
            <li>
                <Link to='/locations'>
                    Locations
                </Link>
            </li>

    

        </ul> 
        


      </nav>
    </div>
  );
};

export default NavBar;


