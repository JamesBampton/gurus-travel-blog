// App.js
import { useState } from "react";
import Layout from "./components/Layout";
// Import Nav Pages
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  const [page, setPage] = useState("home");
  {
    /* set default page to 'home' */
  }
  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {/* Render a Layout component to display different 'child elements based on value of page
    selectPage is the current page which is initially set to home. onSetPage provides a function to update selected page */}

      {page === "home" && <HomePage />}
      {page === "blog" && <BlogPage />}
      {page === "cities" && <CitiesPage />}
      {page === "categories" && <CategoriesPage />}
      {page === "about" && <AboutPage />}
    </Layout>
  );
}

export default App;
