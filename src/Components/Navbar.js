import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <header className='navbar'>
        <nav>
        <h2 className="Navlink">
          <Link to="/">Home</Link>
        </h2>

        <h2 className="Navlink">
          <Link to="/movies">Movies</Link>
        </h2>

          <h2 className="Navlink">
          <Link to="/people">People</Link>
        </h2>

        <h2 className="Navlink">
          <Link to="/location">Location</Link>
        </h2>
        
        </nav>
        </header>
  )
}
