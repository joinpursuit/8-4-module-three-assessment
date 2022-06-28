import logo from "./logo.svg"
import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return ( 
    <nav className='nav'>
        <Link to='/' className='site-title'>
        <img src={logo} alt='logo'/>
    </Link>
    <ul>
        <CustomLink to='/movies'>Movies</CustomLink>
        <CustomLink to='/people'>People</CustomLink>
        <CustomLink to='/locations'>Locations</CustomLink>
    </ul>
  </nav>
    
  )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath  = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className= {isActive ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )
}