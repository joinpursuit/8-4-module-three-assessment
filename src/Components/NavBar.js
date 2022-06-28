import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className='Navbar'>
        <Link to='/'>
          <img src={logo} alt='GhibliApp logo' className='logo' />
        </Link>
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