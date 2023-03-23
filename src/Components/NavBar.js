import React from 'react';
import { Link } from 'react-router-dom';
import Studio_Ghibli_logo from "../logo/Studio_Ghibli_logo.jpeg";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <div className="App-logo">
                <Link to='/' >
                    <img src={Studio_Ghibli_logo} alt="logo" />
                </Link>
            </div>
            <div key='Movies' className="Movies">
                <Link to='/movies' style={{ textDecoration: 'none' }}>
                    <h2>Movies</h2>
                </Link>
            </div>

            <div key='People' className='People'>
                <Link to="/people" style={{ textDecoration: 'none' }}>
                    <h2>People</h2>
                </Link>
            </div>

            <div key='Locations' className="Locations">
                <Link to="/locations" style={{ textDecoration: 'none' }}>
                    <h2>Locations</h2>
                </Link>
            </div>
        </>
    )
}

