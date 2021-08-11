const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");

// Load config
// config.env is where all the global variables are stored.
dotenv.config({ path: "./config/config.env" });

// Initialize app
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));
