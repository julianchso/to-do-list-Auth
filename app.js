const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require('express-handlebars')
const passport = require("passport");
const connectDB = require("./config/db");

// Load config
// config.env is where all the global variables are stored.
dotenv.config({ path: "./config/config.env" });

// This call connects to mongodb.
connectDB();

// Initialize app
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ejs
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set("view engine", "hbs");

const PORT = process.env.PORT || 3000;

// Routes
app.use("/", require("./routes/index"));
// app.use("/auth", require("./routes/auth"));
// app.use("/todo", require("./routes/todo"));

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
