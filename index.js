const express = require("express")

const PORT = 3000;

const app = express();
const taskArrData = [];

app.use(express.json())
// Tasks
// GET /tasks: Retrieve all tasks.
app.get('/tasks',(req,res)=>{
    return res.status(200).json(taskArrData);
})

// GET /tasks/<id> : Retrieve a single task by its ID.
app.get('/tasks/:taskId',(req,res)=>{
    let taskId = req.params.taskId;
    let task = taskArrData.filter(val=>val.id == taskId);
    if(!task.length){
        return res.send(404).send("Task not found");
    }
    res.send(200).send(task)
})

// POST /tasks : Create a new task.
app.post('/tasks',(req,res)=>{
    const userProvidedDetails = req.body;
    console.log(userProvidedDetails);
    taskArrData.push(userProvidedDetails)
    return res.status(200).send("Task Created Successfully")
})

// PUT : Update an existing task by its ID.
app.put('/tasks/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    const userProvidedDetails = req.body;
    console.log(userProvidedDetails);
})


app.delete('/tasks/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    let task = taskArrData.filter(val=>val.id != taskId);
    if(!task.length){
        return res.send(404).send("Task not found");
    }
})


app.listen(PORT,(err)=>{
    console.log(`Express Server running on PORT:${PORT}`);
})