const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoutes");

app.use(express.json());

app.use("/todos", todoRouter);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
