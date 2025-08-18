// const router = require("express").Router();
// const { authMiddleware } = require("../utils/auth");
// const { Blog, User, Category, Comment } = require("../models");

// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../uploads/thumbnails"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//   },
// });

// // Initialize upload middleware
// const upload = multer({ storage });


// // Create blog post
// // router.post("/", authMiddleware, async (req, res) => { added line below
// router.post("/", upload.single("thumbnail"), authMiddleware, async (req, res) => {
//   try {
//     const { blog_title, blog_content, category_id } = req.body;

//      const thumbnailPath = req.file
//       ? `/uploads/thumbnails/${req.file.filename}`
//       : null;

//     const newBlog = await Blog.create({
//       blog_title,
//       blog_content,
//       category_id,
//       user_id: req.user.id,
//       thumbnail_image:thumbnailPath, 
//     });

//     res.status(201).json(newBlog);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating blog post", error: error.message });
//   }
// });

// // Get all blog posts (public)
// /*router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username", "email"], // or whichever user fields you want
//         },
//         {
//           model: Category,
//           attributes: ["id", "category_name"],
//         },
//         {
//           model: Comment,
//           include: [{ model: User, attributes: ["id", "username"] }], // Include comment author info if needed
//         },
//       ],
//       order: [["id", "DESC"]],
//     });

//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving blogs", error: error.message });
//   }
// });*/

// router.get("/", async (req, res) => {
//   try {
//     const { category } = req.query; // e.g., ?category=Adventure

//     const whereClause = {};

//     if (category) {
//       const foundCategory = await Category.findOne({
//         where: { category_name: category },
//       });

//       if (!foundCategory) {
//         return res.status(404).json({ message: "Category not found" });
//       }

//       whereClause.category_id = foundCategory.id;
//     }

//     const blogs = await Blog.findAll({
//       where: whereClause,
//       include: [
//         { model: User, attributes: ["id", "username", "email"] },
//         { model: Category, attributes: ["id", "category_name"] },
//         {
//           model: Comment,
//           include: [{ model: User, attributes: ["id", "username"] }],
//         },
//       ],
//       order: [["id", "DESC"]],
//     });

//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving blogs", error: error.message });
//   }
// });


// // Get blog by ID (public)
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username", "email"],
//         },
//         {
//           model: Category,
//           attributes: ["id", "category_name"],
//         },
//         {
//           model: Comment,
//           include: [{ model: User, attributes: ["id", "username"] }],
//         },
//       ],
//     });

//     if (!blog) {
//       return res.status(404).json({ message: "Blog post not found" });
//     }

//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving blog post", error: error.message });
//   }
// });

// // Update blog post
// router.put("/:id", authMiddleware, async (req, res) => {
//   try {
//     const { blog_title, blog_content, category_id } = req.body;

//     const [updatedRows] = await Blog.update(
//       { blog_title, blog_content, category_id },
//       {
//         where: {
//           id: req.params.id,
//           user_id: req.user.id,
//         },
//       }
//     );

//     if (updatedRows === 0) {
//       return res.status(404).json({ message: "Blog post not found or unauthorized" });
//     }

//     res.json({ message: "Blog post updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating blog post", error: error.message });
//   }
// });

// // Delete blog post
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const deletedRows = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.user.id,
//       },
//     });

//     if (deletedRows === 0) {
//       return res.status(404).json({ message: "Blog post not found or unauthorized" });
//     }

//     res.json({ message: "Blog post deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting blog post", error: error.message });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const { authMiddleware } = require("../utils/auth");
const { Blog, User, Category, Comment } = require("../models");
const multer = require("multer");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/thumbnails"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ==========================
// Create blog post
// ==========================
router.post("/", authMiddleware, upload.single("thumbnail"), async (req, res) => {
  try {
    const { blog_title, blog_content, category_id } = req.body;

    const thumbnailPath = req.file ? `/uploads/thumbnails/${req.file.filename}` : null;

    const newBlog = await Blog.create({
      blog_title,
      blog_content,
      category_id,
      user_id: req.user.id,
      thumbnail_image: thumbnailPath,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog post", error: error.message });
  }
});

// ==========================
// Get all blogs (optionally by category)
// ==========================
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const whereClause = {};

    if (category) {
      const foundCategory = await Category.findOne({ where: { category_name: category } });
      if (!foundCategory) return res.status(404).json({ message: "Category not found" });
      whereClause.category_id = foundCategory.id;
    }

    const blogs = await Blog.findAll({
      where: whereClause,
      include: [
        { model: User, attributes: ["id", "username", "email"] },
        { model: Category, attributes: ["id", "category_name"] },
        { model: Comment, include: [{ model: User, attributes: ["id", "username"] }] },
      ],
      order: [["id", "DESC"]],
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blogs", error: error.message });
  }
});

// ==========================
// Get blog by ID
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id", "username", "email"] },
        { model: Category, attributes: ["id", "category_name"] },
        { model: Comment, include: [{ model: User, attributes: ["id", "username"] }] },
      ],
    });

    if (!blog) return res.status(404).json({ message: "Blog post not found" });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog post", error: error.message });
  }
});

// ==========================
// Update blog post
// ==========================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { blog_title, blog_content, category_id } = req.body;

    const [updatedRows] = await Blog.update(
      { blog_title, blog_content, category_id },
      { where: { id: req.params.id, user_id: req.user.id } }
    );

    if (updatedRows === 0)
      return res.status(404).json({ message: "Blog post not found or unauthorized" });

    res.json({ message: "Blog post updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog post", error: error.message });
  }
});

// ==========================
// Delete blog post
// ==========================
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedRows = await Blog.destroy({
      where: { id: req.params.id, user_id: req.user.id },
    });

    if (deletedRows === 0)
      return res.status(404).json({ message: "Blog post not found or unauthorized" });

    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog post", error: error.message });
  }
});

module.exports = router;
