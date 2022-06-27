import { Link } from "react-router-dom";
import "./Nav.css"
import logo from "./logo.svg";

function Nav() {
    return (
      <header>
        <article>
          <h1>
            <Link to="/">
            <img
          src={logo}
          alt='logo'
          className="logo" />
            </Link>
          </h1>
        </article>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
      </header>
    );
  };
  
  export default Nav;
 