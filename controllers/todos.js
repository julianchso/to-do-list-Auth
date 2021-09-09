const Todo = require("../models/todos");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find({ googleId: req.user.googleId }).lean();
      const itemsLeft = await Todo.countDocuments({
        googleId: req.user.googleId,
        done: false,
      }).lean();
      console.log(user);
      res.render("todos", {
        todos: todoItems,
        left: itemsLeft,
        user: req.user,
      });
      console.log(req.user);
    } catch (err) {
      console.error(err);
    }
  },

  addTodo: async (req, res) => {
    console.log(req.body.todoItem);
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
};
