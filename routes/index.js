// any route that isn't followed by something.

const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: 'login'
  });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/todos", ensureAuth, (req, res) => {
  console.log(req.user);
  res.render("todos");
});

module.exports = router;
