import React from 'react'
import { Link } from 'react-router-dom'

import "./Nav.css"

function Nav() {
  return (
    <div className='navigation'>
      <Link to="/">
        <img src = "" alt = ""/>
        </Link>
      <Link to="/movies">
        <h2>Movies</h2>
        </Link>
      <Link to="/location">
        <h2>Location</h2>
        </Link>
      <Link to="/people">
        <h2>People</h2>
        </Link>
    </div>
  )
}

export default Nav