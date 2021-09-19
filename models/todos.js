const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", toDoSchema);
