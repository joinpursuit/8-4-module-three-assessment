import React from 'react';
// import Hestia3 from "./Hestia3.jpg";
import united from "./united.jpeg";
import { Link } from "react-router-dom";

const Logo = () => {
  const imgUrl = united;
  return (
    <div>
      <Link to="/">
      <img  style={{height: "50px", width: "80px"}}src={imgUrl} alt="myLogo"/>
      </Link>
    </div>
  )
}

export default Logo;


// this should return the user to the  home page route(/)