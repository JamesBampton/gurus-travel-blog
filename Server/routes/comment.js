const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Comment, User } = require("../models");

// Create comment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { comment_content, blog_id } = req.body;

    if (!comment_content || !blog_id) {
      return res.status(400).json({ message: "Comment content and blog_id are required" });
    }

    // Create the comment
    const newComment = await Comment.create({
      comment_content,
      user_id: req.user.id,
      blog_id,
    });

    // Fetch the comment again with the associated user
    const fullComment = await Comment.findOne({
      where: { id: newComment.id },
      include: {
        model: User,
        attributes: ["username"], // Add more fields if needed
      },
    });

    res.status(201).json(fullComment);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
});


// Get comments for a blog (public)
router.get("/blog/:blog_id", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { blog_id: req.params.blog_id },
      include: [
        {
          model: User,
          attributes: ["id", "username", "email"], // choose user fields you want to expose
        },
      ],
      order: [["id", "ASC"]],
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error: error.message });
  }
});

// Delete comment (only by owner)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedRows = await Comment.destroy({
      where: { id: req.params.id, user_id: req.user.id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Comment not found or unauthorized" });
    }

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error: error.message });
  }
});

module.exports = router;
