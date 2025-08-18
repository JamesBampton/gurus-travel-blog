//import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext"; //ADDED FROM SRAVYA
import { NavLink, useNavigate } from "react-router-dom"; //ADDED FROM SRAVYA
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import  CreatePost from "../components/CreateBlog"; // Import modal component
import "../assets/css/navbar.css";

const NavBar = () => {
  //const [hover, setHover] = useState(false);
  const { user, logout,showCreateModal, setShowCreateModal } = useSession(); //ADDED FROM SRAVYA
  const navigate = useNavigate(); //ADDED FROM SRAVYA
  

  const handleCreateBlog = () => {
    if (!user) {
      navigate("/login", { state: { fromCreate: true } });
    } else {
      setShowCreateModal(true);
    }
  };


  return (
    <Navbar expand="lg" style={styles.navbar} className="navbar navbar-light">
      <Container
        id="container"
        className="d-flex justify-content-between align-items-center"
        style={styles.conty}
      >
        {/*<Navbar.Brand href="#home">*/}
        <Navbar.Brand as={NavLink} to="/">
          {" "}
          {/* //ADDED FROM SRAVYA */}
          <img
            src="/logo-sm.png"
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
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              /* onClick={() => onSetPage("home")}
              active={selectedPage === "home"}
              style={selectedPage === "home" ? styles.activeLink : undefined} */
            >
              HOME
            </Nav.Link>

            <Nav.Link as={NavLink} to="/blog">
              BLOG
            </Nav.Link>

            {/* <Nav.Link
              onClick={() => onSetPage("cities")}
              active={selectedPage === "cities"}
              style={selectedPage === "cities" ? styles.activeLink : undefined}
            >
              CITIES
            </Nav.Link> */}

            <NavDropdown title="CATEGORIES" id="categories-dropdown">
              <NavDropdown.Item as={NavLink} to="/blog?category=Adventure">
                Adventure
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Beach">
                Beach
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Cultural">
                Cultural
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Wildlife">
                Wildlife
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Food">
                Food
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=History">
                History
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Nature">
                Nature
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Road Trips">
                Road Trips
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Luxury Travel">
                Luxury Travel
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/blog?category=Budget Travel">
                Budget Travel
              </NavDropdown.Item>
            </NavDropdown>

            {/*    <Nav.Link
              onClick={() => onSetPage("categories")}
              active={selectedPage === "categories"}
              style={
                selectedPage === "categories" ? styles.activeLink : undefined
              }
            >
              {/*<img src="" alt="Portfolio" style={styles.icons} />}
              CATEGORIES
            </Nav.Link>
 */}
            <Nav.Link as={NavLink} to="/about">
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
             {/* Create Blog button - always visible */}
            <div className="d-flex align-items-center ms-lg-3 gap-2 mt-2 mt-lg-0"></div>
            <button
              onClick={handleCreateBlog}
               //className="btn btn-success me-2 mb-2"
              className="btn btn-outline-primary"
              style={{ marginRight: "15px" }}

              
            >
              CREATE BLOG
            </button>
            {/* Conditional rendering for login/logout */}
            {user ? (
              <>
                <span  className="btn btn-outline-succes " style={{ color: "#008000" }} >
                  Welcome, {user.username}!
                </span>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                     className="btn btn-outline-danger"
                 
                  
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
            <Nav.Link
              as={NavLink}
              to="/login"
               className="btn btn-outline-success"
            >
              LOGIN
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/register"
              className="btn btn-outline-success mb-2 mt-1"
            >
              REGISTER

            </Nav.Link>
          </>
            // {/* <Nav.Link as={Link} to="/login" className="btn btn-dark me-2">
            //   LOGIN
            // </Nav.Link>
            // <Nav.Link as={Link} to="/register" className="btn btn-primary">
            //   REGISTER
            // </Nav.Link> */}
            )}
            

          </Nav>
        </Navbar.Collapse>
      </Container>
       {/* Modal for Create Blog */}
      {showCreateModal && (
        <div
          className="modalOverlay"
          onClick={() => setShowCreateModal(false)}
          style={modalStyles.overlay}
        >
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
            style={modalStyles.content}
          >
            <button
              onClick={() => setShowCreateModal(false)}
              style={modalStyles.closeBtn}
            >
              &times;
            </button>
            <CreatePost
              onSuccess={() => {
                setShowCreateModal(false); // close modal
                navigate("/blog");        // redirect to BlogPage.jsx
              }}/>
          </div>
        </div>
      )}
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

  activeLinkSub: {
    fontWeight: "bold",
    color: "#d6ddd6ff",
  },
};
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  content: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
  },
  closeBtn: {
    float: "right",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
};
export default NavBar;
