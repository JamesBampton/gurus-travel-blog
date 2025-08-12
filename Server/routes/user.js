const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { signToken, authMiddleware } = require("../utils/auth");

// Register
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword
    });

    const token = signToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Get current user
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
});

module.exports = router;
