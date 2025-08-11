import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <br></br>
      <div>
        <ul>
          <li style={styles.list}>
            <strong>INSTAGRAM:</strong>
            {"blah blah blah "}
            <a style={styles.contact} href="">
              +44 7887945460{" "}
            </a>
            <strong>EMAIL:</strong>{" "}
            <a style={styles.contact} href="mailto:someone@gmail.com">
              info@example.com{" "}
            </a>
          </li>
        </ul>
      </div>
      <div
        className="w3-center"
        style={{
          paddingBottom: "0px",
          height: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul
          className="mediame"
          style={{
            position: "absolute",
            top: "inherit",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "3",
            display: "flex",
          }}
        >
          <li
            style={{
              listStyle: "none",
              margin: "0%",
              paddingLeft: "0em",
              paddingRight: "0em",
            }}
          >
            <a
              style={{
                position: "relative",
                display: "block",
                width: "80px",
                height: "80px",
                color: "white",
              }}
              href="#"
              className="fab fa-instagram fa-2x"
            ></a>
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "0%",
              paddingLeft: "0em",
              paddingRight: "0em",
            }}
          >
            <a
              style={{
                position: "relative",
                display: "block",
                width: "80px",
                height: "80px",
                color: "white",
              }}
              href="#"
              className="fab fa-facebook-f fa-2x"
            ></a>
          </li>
          <li
            style={{
              listStyle: "none",
              margin: "0%",
              paddingLeft: "0em",
              paddingRight: "0em",
            }}
          >
            <a
              style={{
                position: "relative",
                display: "block",
                width: "80px",
                height: "80px",
                color: "white",
              }}
              href="www.linkedin.com/in/james-bampton-bsc-hons-1821053"
              className="fab fa-linkedin fa-2x"
            ></a>
          </li>
        </ul>
        <p>
          &copy; 2025 Guru's of the Apocolypse React Application. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: "#000000",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    height: "300px",
  },
  contact: {
    padding: "10px",
    listStyle: "none",
    color: "#a05b2e",
  },
  list: {
    listStyle: "none",
  },
};

export default Footer;
