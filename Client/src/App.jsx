//OLD CODE WORKIGN BEFORE LOGIN

// App.js
/* import { useState } from "react";
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
    /* set default page to 'home' 
  }
  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {/* Render a Layout component to display different 'child elements based on value of page
    selectPage is the current page which is initially set to home. onSetPage provides a function to update selected page *

      {page === "home" && <HomePage />}
      {page === "blog" && <BlogPage />}
      {page === "cities" && <CitiesPage />}
      {page === "categories" && <CategoriesPage />}
      {page === "about" && <AboutPage />}
      {page === "sparepage" && <SparePage />}
    </Layout>
  );
}

export default App; */

// NEW CODE FROM SRAVYA

import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
