import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from './Logo'

function Nav() {
  return (
    <div>
      <Link to="/"><Logo/></Link>
      <Link to="/movies"><h5>Movies</h5></Link>
      <Link to="/people"><h5>People</h5></Link>
      <Link to="/locations"><h5>Locations</h5></Link>
    </div>
  )
}

export default Nav