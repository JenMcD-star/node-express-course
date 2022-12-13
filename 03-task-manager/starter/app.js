const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require('dotenv').config()
//middleware

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);

//api.get('/api/v1/tasks') -get all tasks
//api.post('/api/v1/tasks') -create a new task
//api.get('/api/v1/tasks/:id') -get single task
//api.patch('/api/v1/tasks/:id') -update task
//api.delete('/api/v1/tasks/:id') -delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error)
  }
};

start()
