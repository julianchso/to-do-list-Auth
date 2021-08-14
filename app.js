const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const connectDB = require("./config/db");

// Load config
// config.env is where all the global variables are stored.
dotenv.config({ path: "./config/config.env" });

// This call connects to mongodb.
connectDB();

// Initialize app
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));
