// Import the installed module of express
const express = require("express");
// Import mongoose module
const mongoose = require("mongoose");
// Provide name for the server
const server = express();
// Declare server port
const port = 5000;

// Trigger connection to mongoDB thru mongoose
mongoose.connect("mongodb://localhost:27017");
let db = mongoose.connection;

// Check if connection has error
db.on("error", () => console.log("Error!"));

// Check if connection is okay
db.once("open", () => console.log("Server is now running"));

const taskSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    default: "pending",
  },
});

//Model

const Task = mongoose.model("Task", taskSchema);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/home", (req, res) => {
  res.send("Hello from the home endpoint!");
});

server.get("/error", (req, res) => {
  res.send({
    code: 404,
    message:
      "ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  });
});

server.post("/tasks/add", (req, res) => {
  let taskParams = { name: req.body.name };

  Task.findOne(taskParams).then((result) => {
    if (result) {
      res.send("Duplicate found. ERRORRRRRRRRRRRRRR!!!!!!!");
    } else {
      let newTask = new Task(taskParams);

      newTask.save().then((savedTask, saveError) => {
        if (saveError) {
          res.send(
            "An error was encountered when attempting to save the provided task to the database of our system which we use",
          );
        } else {
          res.status(201).send({
            code: 201,
            message: "Task is now added!",
            data: savedTask,
          });
        }
      });
    }
  });
});

server.listen(port, () => console.log(`Server is now running on port ${port}`));
