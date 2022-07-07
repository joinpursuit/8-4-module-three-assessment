import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <Link to="/"><img src="https://img.icons8.com/ultraviolet/40/000000/home--v1.png" alt='home icon'/></Link>
        <Link className='shortcuts' to="/movies">Movies</Link>
        <Link className='shortcuts' to="/people">People</Link>
        <Link className='shortcuts' to="/locations">Locations</Link>
    </nav>
  )
}
