const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const sequelize = require("./config/connection");
const routes = require("./routes");

// Initialize Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../client/public")));

// Root route
app.get("/", (req, res) => {
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
