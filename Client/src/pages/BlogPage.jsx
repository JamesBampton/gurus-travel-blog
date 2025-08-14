// HomePage.js
import { useSession } from "../contexts/SessionContext"; 
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // import Modal components
//import React from "react";
import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";

// ...existing code...
const IconsPage = () => {
  const { user } = useSession(); // get current logged-in user
  const [showModal, setShowModal] = useState(false); // state to show/hide modal
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <br />
            <div className="backgroundImgblog"></div>
            {/* places image in this location */}
            <br />
            <br />
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        
        {/* Create Button - only visible if logged in */}
        {user && (
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <Button variant="primary" onClick={handleOpen}>
            Create Blog
          </Button>
        </div>
      )}

      {/* Modal for Create Blog */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="blogTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter blog title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="blogContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your blog content"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { /* handle submit */ }}>
            Save Blog
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="content">
          {/* NG CARD */}
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./icons.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span style={{ color: "#a05b2e" }}>Some more text</span>
              </h2>
            </div>
          </div>
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ng-blue.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span>Some more text</span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ng-logo.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span>Some more text</span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ng-log0.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span>Some more text</span>
              </h2>
            </div>
          </div>
          {/* Repeat other cards as needed, fixing className and style usage */}
          {/* ...other cards... */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default IconsPage;
// ...existing code...
