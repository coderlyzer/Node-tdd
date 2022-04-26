const express = require("express");
const todoController = require("../controllers/todoController");
const Router = express.Router();

Router.route("/").post(todoController.createTodo);

module.exports = Router;
