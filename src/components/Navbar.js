import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "./Footer";
import YSLogo from "./YSLogo.png";
import StudioG from "./StudioG.png";


const Navbar = () => {
  return (
    <nav>
      <div>
      <Link to="/">
        <img src={YSLogo} alt="logo" width="200px" /> 
      </Link>
      </div>
      <div><img src={StudioG} alt="ghiblilogo" width="200px"></img><br></br></div>
      <div>
      <Link to="/movies"><h2>Movies</h2></Link>
      </div>
      <div>
      <Link to="/people"><h2>People</h2></Link>
      </div>
      <div>
      </div>
      <div>
      <Link to="/locations"><h2>Locations</h2></Link>
      </div>
      <section className="footerish">
      <div> 
      <Footer />
      </div>
      </section>
    </nav>
  );
}

export default Navbar;