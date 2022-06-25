import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav"

export const Navbar = () => {
  return (
    <nav>
      <Nav justify variant="tabs" className="Nav" className="justify-content-center" activeKey={"/"}>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
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
