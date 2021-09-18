const Todo = require("../models/todos");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find({ googleId: req.user.googleId }).lean();
      const itemsLeft = await Todo.countDocuments({
        googleId: req.user.googleId,
        done: false,
      });

      res.render("todos.hbs", {
        todo: todoItems,
        left: itemsLeft,
        name: req.user.firstName,
      });
    } catch (err) {
      console.error(err);
    }
  },

  addTodo: async (req, res) => {
    console.log(req.body);
    try {
      await Todo.create({
        todo: req.body.todoItem,
        done: false,
        googleId: req.user.googleId,
      });
      console.log("To do has been added!");
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  },

  deleteTodo: async (req, res) => {
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoId });
      console.log("Deleted Todo");
      res.json("Deleted Todo");
    } catch (err) {
      console.log(err);
    }
  },

  markComplete: async (req, res) => {
    console.log("markComplete");
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoId },
        {
          done: true,
        }
      );
      console.log("complete");
      res.json("Marked Complete");
    } catch {
      console.log(err);
    }
  },

  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoId },
        {
          done: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch {
      console.log(err);
    }
  },
};
