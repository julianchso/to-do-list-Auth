const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  done: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
});
