import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from './Logo'

function Nav() {
  return (
    <div>
      <nav>
      <Link to="/"><Logo/></Link>
      <Link to="/movies"><h5>Movies</h5></Link>
      <Link to="/people"><h5>People</h5></Link>
      <Link to="/locations"><h5>Locations</h5></Link>
      </nav>
    </div>
  )
}

export default Nav