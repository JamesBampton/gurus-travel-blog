const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Blog, User, Category, Comment } = require("../models");

// Create blog post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content, category_id } = req.body;
    const blog = await Blog.create({
      title,
      content,
      category_id,
      user_id: req.user.id
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog post", error });
  }
});

// Get all blog posts (public)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [User, Category, Comment]
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error });
  }
});

// Get blog by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id, {
      include: [User, Category, Comment]
    });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving blog post" });
  }
});

// Update blog post
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, content, category_id } = req.body;
    const updated = await Blog.update(
      { title, content, category_id },
      { where: { id: req.params.id, user_id: req.user.id } }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating blog post" });
  }
});

// Delete blog post
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Blog.destroy({
      where: { id: req.params.id, user_id: req.user.id }
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: "Error deleting blog post" });
  }
});

module.exports = router;
