import React from 'react';
import "./Nav.css";
import logo from "./logo.png";

function Logo() {
    const img = logo;
  return (
    <div className="logo">
   
            <img src={ img } alt="logo"/>

    </div>
  )
}

export default Logo;