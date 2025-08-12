const router = require("express").Router();

// Import all route files
const blogRoutes = require("./blog");
const commentRoutes = require("./comment");
const userRoutes = require("./user");
const categoryRoutes = require("./category");

// Mount routes
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
