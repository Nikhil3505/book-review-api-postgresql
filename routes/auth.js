const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Signup endpoint working" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint working" });
});

module.exports = router;
