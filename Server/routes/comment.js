const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Comment, User } = require("../models");

// Create comment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { comment_content, blog_id } = req.body;
    const comment = await Comment.create({
      comment_content,
      user_id: req.user.id,
      blog_id
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
});

// Get comments for a blog (public)
router.get("/blog/:blog_id", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { blog_id: req.params.blog_id },
      include: [User]
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error });
  }
});

// Delete comment (only owner)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id, user_id: req.user.id }
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: "Error deleting comment" });
  }
});

module.exports = router;
