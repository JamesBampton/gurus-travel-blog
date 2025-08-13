//import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../assets/css/navbar.css";

const NavBar = ({ selectedPage, onSetPage }) => {
  //const [hover, setHover] = useState(false);

  return (
    <Navbar expand="lg" style={styles.navbar} className="navbar navbar-light">
      <Container
        id="container"
        className="d-flex justify-content-between align-items-center"
        style={styles.conty}
      >
        <Navbar.Brand href="#home">
          <img
            src="Client\public\logo-sm.png"
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
            <Nav.Link
              onClick={() => onSetPage("home")}
              active={selectedPage === "home"}
              style={selectedPage === "home" ? styles.activeLink : undefined}
            >
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              HOME
            </Nav.Link>
            <Nav.Link
              onClick={() => onSetPage("blog")}
              active={selectedPage === "blog"}
              style={selectedPage === "blog" ? styles.activeLink : undefined}
            >
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              BLOG
            </Nav.Link>
            {/* <Nav.Link
              onClick={() => onSetPage("cities")}
              active={selectedPage === "cities"}
              style={selectedPage === "cities" ? styles.activeLink : undefined}
            >
              
              CITIES
            </Nav.Link> */}
            <Nav.Link
              onClick={() => onSetPage("categories")}
              active={selectedPage === "categories"}
              style={
                selectedPage === "categories" ? styles.activeLink : undefined
              }
            >
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              CATEGORIES
            </Nav.Link>
            <Nav.Link
              onClick={() => onSetPage("about")}
              active={selectedPage === "about"}
              style={selectedPage === "about" ? styles.activeLink : undefined}
            >
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              ABOUT
            </Nav.Link>
            {/* Divider */}
            <div
              style={{
                //borderLeft: "1px solid #ccc",
                //height: "40px",
                margin: "0 22px",
              }}
            />
            <Nav.Link
              onClick={() => onSetPage("login")}
              style={{
                backgroundColor: "#008000",
                color: "#fff",
                padding: "6px 12px",
                //fontWeight: "bold",
                marginRight: "6px",
                marginBottom: "6px",
              }}
            >
              LOGIN
            </Nav.Link>
            <Nav.Link
              onClick={() => onSetPage("register")}
              style={{
                backgroundColor: "#008000",
                color: "#fff",
                padding: "6px 12px",
                //fontWeight: "bold",
                marginRight: "6px",
                marginBottom: "6px",
              }}
            >
              REGISTER
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/login" className="btn btn-dark me-2">
              LOGIN
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="btn btn-primary">
              REGISTER
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Inline styles
const styles = {
  icons: {
    width: "100px",
    height: "100px",
    transform: "translateY(67px)",
    transition: "transform 0.3s ease",
  },
  hover: {
    transform: "scale(1.2)",
    transition: "0.7s ease",
  },

  icons2: {
    width: "100px",
    height: "100px",
    transform: "translateY(67px)",
    transition: "transform 0.3s ease",
    marginBottom: "0px",
  },

  brand: {
    //width: "70px",
    //height: "70px",
  },
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

  activeLink: {
    fontWeight: "bold",
    color: "#008000",
    borderBottom: "1px solid #008000",
  },
};

export default NavBar;
