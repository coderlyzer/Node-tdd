const mongoose = require("mongoose");

const STRING =
  "mongodb+srv://todo-tdd:todo123@todo-tdd-cluster.xvsu7.mongodb.net/todo_tdd-Database?retryWrites=true&w=majority";

const CONNECTDB = () => {
  return mongoose
    .connect(STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // console.log("CONNECTION TO MONGODB CLOUD DATABASE SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = CONNECTDB;
