import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <div className='Navbar'>
        <ul className='nav-links'>
          <li>
            <Link to='/Movies'>Movies</Link>
          </li>
          <li>
            <Link to='/People'>People</Link>
          </li>
          <li>
            <Link to='/Locations'>Locations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;