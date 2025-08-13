const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Category } = require("../models");

// Create category
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { category_name } = req.body;
    if (!category_name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error adding category", error: error.message });
  }
});

// Get all categories (public)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error: error.message });
  }
});

// Get category by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error: error.message });
  }
});

// Update category
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { category_name } = req.body;

    if (!category_name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const [updatedRows] = await Category.update(
      { category_name },
      { where: { id: req.params.id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Category not found or no change made" });
    }

    res.json({ message: "Category updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error: error.message });
  }
});

// Delete category
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedRows = await Category.destroy({ where: { id: req.params.id } });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error: error.message });
  }
});

module.exports = router;
