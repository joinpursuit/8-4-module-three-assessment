import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <h2 className='navlink'>
                <Link to="/"><img src='https://cdn.vox-cdn.com/thumbor/-FjfBFqKm6dIiWgulRNqrilhjL0=/0x0:6000x4800/920x613/filters:focal(3818x1875:4778x2835):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66840504/Studio_Ghibli_Logo.0.jpg' width="125" height="75" alt='home'/></Link> 
            </h2>
            <h2 className='navlink'>
                <Link style={{textDecoration:"none"}} to="/movies">Movies</Link> 
            </h2>
            <h2 className='navlink'>
                <Link style={{textDecoration:"none"}} to="/people">People</Link> 
            </h2>
            <h2 className='navlink'>
                <Link style={{textDecoration:"none"}} to="/locations">Locations</Link> 
            </h2>
        </nav>
    </div>
  )
}
