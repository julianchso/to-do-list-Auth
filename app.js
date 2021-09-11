const path = require("path");
const express = require("express"); // handle CRUD api
const exphbs = require("express-handlebars");
const mongoose = require("mongoose"); // talk to database
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport"); // handle all auth
const session = require("express-session"); // keep users logged in
const MongoStore = require("connect-mongo"); // pass session to database. Can get back in even if server restarts.
const connectDB = require("./config/db"); // how we connect to database

// Load config
// config.env is where all the global variables are stored.
dotenv.config({ path: "./config/config.env" });

// Passport config
require("./config/passport")(passport);

// This call connects to mongodb.
connectDB();

// Initialize app
const app = express();

// Body parser
// this allows us to look into data that was sent from forms
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/todos", require("./routes/todos"));

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
