import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <nav className='navbar'>
      <div className='nav-center'>
       
          <Link to="/">
            <img
              src="https://ghiblicollection.com/userFiles/uploads/Logos/Ghibli-Logo-3.png"
              alt="studio ghibli screenshot"
            />
          </Link>
    
     
        <ul className='nav-links'>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar