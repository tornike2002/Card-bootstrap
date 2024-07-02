import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import userPic from "../assets/logo.webp";
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container className="d-flex justify-content-center align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={userPic} alt="user picture" height={40} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <Link to="/user" className="nav-link text-light">
              UserInfo
            </Link>
            <Link to="/cards" className="nav-link text-light">
              Cards
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
