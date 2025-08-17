const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const sequelize = require("./config/connection");
const routes = require("./routes");
const { Blog } = require("./models");

// Initialize Express application
const app = express();

// Initialize Multer for file uploads
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb)  {
        cb(null, 'uploads/thumbnails');
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    }
});
const upload = multer({ storage });

app.post("/api/blogs", upload.single("thumbnail"), async (req, res) => {
  try {
    const { blog_title, blog_content, category_id, user_id } = req.body;
    const thumbnailPath = req.file ? `/uploads/thumbnails/${req.file.filename}` : null;

    // Save to DB
    const newBlog = await Blog.create({
     blog_title: req.body.blog_title,
  blog_content: req.body.blog_content,
  category_id: req.body.category_id,
  user_id: req.body.user_id,
  thumbnail_image: thumbnailPath,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Blog creation failed:", err);
    res.status(500).json({ error: "Failed to create blog post" });
  }
});


// End multer

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Server static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads/thumbnails")));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../client/public")));

// Root route
app.get("/", (req, res) => {

  //res.sendFile(path.join(__dirname, "public", "index.html"));
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// Mount all routes from routes/index.js
app.use(routes);

// Set port
const PORT = process.env.PORT || 3001;

// Rebuild flag for database
const rebuild = process.argv[2] === "--rebuild";

// Sync database and start server
sequelize.sync({ force: rebuild }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});