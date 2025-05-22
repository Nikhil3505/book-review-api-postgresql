const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Add book endpoint working" });
});

router.get("/", (req, res) => {
  res.json({ message: "Get all books endpoint working" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get book details for book id ${req.params.id}` });
});

module.exports = router;
