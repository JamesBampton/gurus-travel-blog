import React from "react"; 
import NavBar from "./NavBar";
import Footer from "./Footer";

const pages = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Blog", key: "blog" },
  { name: "Categories", key: "categories" },
  { name: "Cities", key: "cities" },
  { name: "SparePage", key: "sparepage" },
];

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <NavBar />

      <div style={styles.main}>
        <section style={styles.content}>{children}</section>
      </div>

      <Footer />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  selected: {
    backgroundColor: "#333",
  },
  main: {
    display: "flex",
  },
  content: {
    flex: 1,
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginTop: "0px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  },
};

export default Layout;
