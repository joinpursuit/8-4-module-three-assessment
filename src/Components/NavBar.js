import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
        <header className='navbar'>
        <nav>
            <img src="../Ghibli.png" alt='Ghilbi App' width={50} height={50}/>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <h2>
                <Link to="/movies">Movies</Link>
            </h2>
            <h2>
                <Link to="/people">People</Link>
            </h2>
            <h2>
                <Link to="/locations">Locations</Link>
            </h2>
        </nav>

        </header>
    </>
    
  )
}

export default NavBar