import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>
          <img src={logo} alt='GhibliApp logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/people'>People</Link>
          </li>
          <li>
            <Link to='/locations'>Locations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
