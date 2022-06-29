import React from 'react'
import {Link} from "react-router-dom"
import logo from './../logo.svg';


function Nav() {
  return (
<div className="Nav">
<nav>
<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
<Link to="movies">Movies</Link> 
<Link to="people"> People</Link>
<Link to="locations">Locations</Link>
</nav>
 </div>
  )
}

export default Nav