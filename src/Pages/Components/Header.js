import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./index.scss";

const flag = (flagName) => (
  <img
    alt=""
    width="32em"
    height="24em"
    src={`https://quadrant12.netlify.app/flags/${flagName}.svg`}
    className="d-inline-block align-top"
    />
);

const Header = () => (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Navbar.Brand href="/under-construction">
        <img
          alt=""
          src="https://quadrant12.netlify.app/logo.png"
          width="auto"
          height="50"
          className="d-inline-block align-top header-logo"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/under-construction/projects">Projectes</Nav.Link>
          <Nav.Link href="/under-construction/team">Equip</Nav.Link>
          <Nav.Link href="/under-construction/contact">Contacta</Nav.Link>
        </Nav>
        <NavDropdown.Divider />
        <Nav>
          <Nav.Link href="">{flag("es-ca")}</Nav.Link>
          <Nav.Link href="">{flag("es")}</Nav.Link>
          <Nav.Link href="">{flag("gb")}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);


export default Header;
