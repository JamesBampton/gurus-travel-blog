import { useSession } from "../contexts/SessionContext";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";

const NavBar = () => {
  const { user, login, logout } = useSession();// Added session handling
  const navigate = useNavigate(); 
  return (
    <Navbar expand="lg" style={styles.navbar} className="navbar navbar-light">
      <Container
        id="container"
        className="d-flex justify-content-between align-items-center"
        style={styles.conty}
      >
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/Client/public/logo-sm.png"
            alt="branding"
            style={styles.brand}
          />
          <span style={styles.span}>FIND YOUR HAPPY PLACE</span>
        </Navbar.Brand>
        <Navbar.Toggle
          style={styles.toggler}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cities">
              CITIES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">
              CATEGORIES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              ABOUT
            </Nav.Link>
            
            {/* LOGIN / LOGOUT button */}
            {user ? (
            <Nav.Link onClick={logout}>LOGOUT</Nav.Link>
            ) : (
            <Nav.Link onClick={() => navigate("/login")}>LOGIN</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const styles = {
  brand: {},
  toggler: {
    background: "#a05b2e",
  },
  span: {
    color: "#a05b2e",
    display: "contents",
  },
  conty: {
    marginLeft: "26px",
  },
};

export default NavBar;