const Todo = require("../models/todos");

module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user);
    console.log(req.user.googleId);
    try {
      const todoItems = await Todo.find({ googleId: req.user.googleId });
      const itemsLeft = await Todo.countDocuments({
        googleId: req.user.googleId,
        done: false,
      });
      console.log(itemsLeft);
      console.log(todoItems);
      
      res.render("todos.hbs", {
        todo: todoItems,
        left: itemsLeft,
        user: req.user,
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
};
