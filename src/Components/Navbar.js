import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <nav>
    <Link to='/' id='homebttn'><h3>Home</h3></Link>
    <Link to='/movies'><h3>Movies</h3></Link>
    <Link to='/people'><h3>People</h3></Link>
    <Link to='/locations'><h3>Locations</h3></Link>
   </nav>
  )
}
