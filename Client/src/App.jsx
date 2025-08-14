// App.js
import { useState } from "react";
import Layout from "./components/Layout";
// Import Nav Pages
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CategoriesPage from "./pages/CategoriesPage";
import SparePage from "./pages/SparePage";

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
      {page === "sparepage" && <SparePage />}
    </Layout>
  );
}

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./components/Layout";
// import HomePage from "./pages/HomePage";
// import CitiesPage from "./pages/CitiesPage";
// import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
// import CategoriesPage from "./pages/CategoriesPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/cities" element={<CitiesPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/categories" element={<CategoriesPage />} />
//         <Route path="*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

export default App;
