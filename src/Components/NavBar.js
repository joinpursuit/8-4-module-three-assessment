import React from 'react';
import { Link } from 'react-router-dom';
import Studio_Ghibli_logo from "../logo/Studio_Ghibli_logo.jpeg";
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <Link to='/' >
                <img src={Studio_Ghibli_logo} className="App-logo" alt="logo" />
            </Link>
            <div key='Movies'>
                <Link to='/movies' style={{ textDecoration: 'none' }}>
                    <h2>Movies</h2>
                </Link>
            </div>

            <div key='People'>
                <Link to="/people" style={{ textDecoration: 'none' }}>
                    <h2>People</h2>
                </Link>
            </div>

            <div key='Locations'>
                <Link to="/locations" style={{ textDecoration: 'none' }}>
                    <h2>Locations</h2>
                </Link>
            </div>
        </>
    )
}

