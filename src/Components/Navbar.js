import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <nav>
    <Link to='/' id='homebttn'><h3>HOME</h3></Link>
    <Link to='/movies'><h3>MOVIES</h3></Link>
    <Link to='/people'><h3>PEOPLE</h3></Link>
    <Link to='/locations'><h3>LOCATIONS</h3></Link>
   </nav>
  )
}
