import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <h2>
                <Link to="/">Home</Link> 
                {/* add image logo that brings you home  */}
            </h2>
            <h2>
                <Link to="/movies">Movies</Link> 
            </h2>
            <h2>
                <Link to="/people">People</Link> 
            </h2>
            <h2>
                <Link to="/locations">People</Link> 
            </h2>
        </nav>
    </div>
  )
}
