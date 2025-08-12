import React from "react";
//import { Link } from 'react-router-dom';
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
            <Nav.Link onClick={() => onSetPage("home")}>
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              HOME
            </Nav.Link>
            <Nav.Link onClick={() => onSetPage("blog")}>
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              BLOG
            </Nav.Link>
            <Nav.Link onClick={() => onSetPage("cities")}>
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              CITIES
            </Nav.Link>
            <Nav.Link onClick={() => onSetPage("categories")}>
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              CATEGORIES
            </Nav.Link>
            <Nav.Link onClick={() => onSetPage("about")}>
              {/*<img src="" alt="Portfolio" style={styles.icons} />*/}
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Inline styles for simplicity
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
};

export default NavBar;
