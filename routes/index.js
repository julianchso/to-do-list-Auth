// any route that isn't followed by something.

const express = require("express");
const router = express.Router();

// @desc Login/Landing page
// @route GET /
router.get("/", (req, res) => {
  res.render("login", {
    layout: 'login'
  });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/todos", (req, res) => {
  res.render("todos");
});

module.exports = router;
