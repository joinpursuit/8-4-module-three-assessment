import React from 'react'
import "./Logo.css"
import GhibliLogo from "./ghibli-logo copy.png"

function Logo() {
  const img = GhibliLogo
  return (
    <div>
      <img src={img} alt="ghibli-logo" style={{height:"100px", width:"100px"}}/>
    </div>
  )
}

export default Logo