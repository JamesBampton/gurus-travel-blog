const express = require("express");
const path = require("path");
const cors = require("cors");
const sequelize = require("./config/connection");
const routes = require("./routes"); 
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Serve uploaded thumbnails
app.use("/uploads/thumbnails", express.static(path.join(__dirname, "uploads/thumbnails")));

// Serve React frontend
app.use(express.static(path.join(__dirname, "../client/public")));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// Mount all API routes
app.use(routes);

// Start server
const PORT = process.env.PORT || 3001;
const rebuild = process.argv[2] === "--rebuild";

sequelize.sync({ force: rebuild }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
