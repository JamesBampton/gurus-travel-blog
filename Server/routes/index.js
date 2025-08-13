const router = require("express").Router();

// Import all route modules
const blogRoutes = require("./blog");
const commentRoutes = require("./comment");
const userRoutes = require("./user");
const categoryRoutes = require("./category");

// Mount API routes with clear base paths
router.use("/blogs", blogRoutes);       // Blog CRUD and retrieval
router.use("/comments", commentRoutes); // Comments CRUD
router.use("/users", userRoutes);       // User registration, login, etc.
router.use("/categories", categoryRoutes); // Category CRUD

// Optional: handle unknown routes (404)
router.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

module.exports = router;
