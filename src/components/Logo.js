import React from 'react';
import { Link } from "react-router-dom";
import YSLogo from "./YSLogo.png";

const Logo = () => {
  const imgUrl = YSLogo;
  return (
    <div>
      <Link to="/">
      <img src={imgUrl} alt="yslogo"/>
      </Link>
    </div>
  )
}

export default Logo;