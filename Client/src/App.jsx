import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
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
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;