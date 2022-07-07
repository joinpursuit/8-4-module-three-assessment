import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"


const linkStyle = {
    color: 'aqua'
}

function NavBar() {
  return (
    <>
        <header className='navbar'>
        <nav>
            <Link to="/">
            <img src="../Ghibli.png" alt='Ghilbi App' width={50} height={50}/>
            </Link>
            <Link to='/' id='homebttn'style={linkStyle} ><h2>Home</h2></Link>
            <h2>
                <Link to="/movies" style={linkStyle} >Movies</Link>
            </h2>
            <h2>
                <Link to="/people" style={linkStyle} >People</Link>
            </h2>
            <h2>
                <Link to="/locations" style={linkStyle} >Locations</Link>
            </h2>
        </nav>

        </header>
    </>
    
  )
}

export default NavBar