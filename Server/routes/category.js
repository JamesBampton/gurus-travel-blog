const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Category } = require("../models");

// Create category
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { category_name } = req.body;
    const category = await Category.create({ category_name });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error adding category", error });
  }
});

// Get all categories (public)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
});

// Get category by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving category" });
  }
});

// Update category
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { category_name } = req.body;
    const updated = await Category.update(
      { category_name },
      { where: { id: req.params.id } }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating category" });
  }
});

// Delete category
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: "Error deleting category" });
  }
});

module.exports = router;
