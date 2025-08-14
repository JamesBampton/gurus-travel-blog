import NavBar from "./NavBar";
import Footer from "./Footer";

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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  main: {
    display: "flex",
  },
  content: {
    flex: 1,
    padding: "0",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  },
};

export default Layout;