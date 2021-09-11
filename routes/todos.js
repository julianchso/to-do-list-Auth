const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { ensureAuth, EnsureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, todosController.getTodos);

router.post("/addTodo", todosController.addTodo);

// router.put("/markComplete", todosController.markComplete);

// router.put("/markIncomplete", todosController.markIncomplete);

// router.delete("/deleteToDo", todosController.deleteToDo);

module.exports = router;
