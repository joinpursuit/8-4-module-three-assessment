import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import catbus from "../0014_catbus_mat_grande.webp";


export const Navbar = () => {

  return (
    <nav>
      <Nav justify variant="tabs" className="Nav" className="justify-content-center" activeKey={"/"}>
          <Nav.Item>
            <Nav.Link href="/"><img src={catbus} width="100px" id="catbus" alt="catbus!"></img></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/locations">Locations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/people">People</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav.Item>
        </Nav>
    </nav>
  );
};
