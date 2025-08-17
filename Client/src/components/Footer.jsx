import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box left-box">
          <h4>Travel Blogs</h4>
          <ul>
            <li>
              <a
                href="https://nomadicmatt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nomadic Matt
              </a>
            </li>
            <li>
              <a
                href="https://theblondeabroad.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Blonde Abroad
              </a>
            </li>
            <li>
              <a
                href="https://expertvagabond.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expert Vagabond
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-box middle-box">
          <h4>Gurus Travel Blog</h4>
          <p>Exploring the world, one story at a time.</p>
          <div className="social-icons">
            <a href="#" className="fab fa-facebook-f fa-2x">
              <p>
                <span style={styles.span}> Facebook</span>
              </p>
            </a>
            <a href="#" className="fa-brands fa-twitter fa-2x">
              <p>
                <span style={styles.span}> Twitter</span>
              </p>
            </a>
            <a href="#" className="fab fa-instagram fa-2x">
              <p>
                <span style={styles.span}> Instagram</span>
              </p>
            </a>
          </div>
          <br></br>
        </div>
        <div className="footer-box right-box">
          <h4>Contact Us</h4>
          <p>Email: contact@gurustravel.com</p>
          <p>Phone: +44 1234 567890</p>
          <p>Location: Hampshire, UK</p>
        </div>
      </footer>
      <div className="flexContainer">
        <div>
          <img
            src="\public\logo-sm.png"
            alt="branding"
            style={styles.brandy}
          ></img>
        </div>
        <hr style={styles.bar}></hr>
      </div>
      <p>
        &copy; 2025 Guru's of the Apocolypse React Application. All rights
        reserved.
      </p>
    </>
  );
};

const styles = {
  span: {
    padding: "10px",
    marginBottom: "0px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  bar: {
    width: "50%",
    marginRight: "25%",
    marginLeft: "25%",
  },

  /*   flexContainer: {
    display: "flex",
    justifyContent: "center",
  },

  flexContainer,
  div: {
    backgroundColor: "#fff",
    width: "100px",
    margin: "10px",
  }, */
};

export default Footer;
