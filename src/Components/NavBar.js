import React from "react";
import ghibliLogoPink from '../images/ghibli-studio-logo-pink.png';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
      <nav className="navbar">
        <Link to="/movie">Movies</Link>
        <Link to='/' >
                    <img src={ ghibliLogoPink } alt='studio ghibli logo' width='50px' height='50px' />
         </Link>
         <Link to='/movies'> </Link>
         <Link to='/people'> People </Link>
         <Link to='/locations'> Locations </Link>
      </nav>
  )
}




