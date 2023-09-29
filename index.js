const express = require("express");
const Validator = require("./helpers/validator");

const PORT = 3000;
const app = express();
// InMemory Resources for Data
let taskArrData = [];
let ID_INCREMENT = 0;


app.use(express.json())

// Default
app.get('/', (req, res) => {   
    return res.status(200).send("hello world");
});

// Task Manger API
// GET /tasks: Retrieve all tasks.
app.get('/tasks',(req,res)=>{
    return res.status(200).json(taskArrData);
})

// GET /tasks/<id> : Retrieve a single task by its ID.
app.get('/tasks/:taskId',(req,res)=>{
    let taskId = req.params.taskId;
    let task = taskArrData.find(val=>val.id == taskId);
    if(!task.length){
        return res.status(404).send("Task not found");
    }
    res.status(200).send(task)
})

// POST /tasks : Create a new task.
app.post('/tasks',(req,res)=>{
    const userProvidedDetails = req.body;

    if(Validator.validateTaskDetails(userProvidedDetails).status){
        userProvidedDetails['id'] = ++ID_INCREMENT;
        taskArrData.push(userProvidedDetails);
        return res.status(201).send(Validator.validateTaskDetails(userProvidedDetails).message)
    }
    return res.status(400).json(Validator.validateTaskDetails(userProvidedDetails));
   
})

// PUT : Update an existing task by its ID.
app.put('/tasks/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    const userProvidedDetails = req.body;
    let task = taskArrData.filter(val=>val.id == taskId);
    
    if(!task.length){
        return res.status(404).send("Task not found");
    }

    if(Validator.validateTaskDetails(userProvidedDetails).status){
        taskArrData.map((val)=>{
            if(val.id == taskId){
                val['title'] = userProvidedDetails.title;
                val['description'] = userProvidedDetails.description;
                val['flag'] = userProvidedDetails.flag;
            }
        })
        return res.status(200).send("Task Updated Successfully")
    }
    return res.status(400).json(Validator.validateTaskDetails(userProvidedDetails));
})


app.delete('/tasks/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    let task = taskArrData.filter(val=>val.id == taskId);
    if(!task.length){
        return res.status(404).send("Task not found");
    }
    taskArrData = taskArrData.filter(val=>val.id != taskId)
    return res.status(200).send("Task Deleted Successfully")
})


app.listen(PORT,(err)=>{
    console.log(`Express Server running on PORT:${PORT}`);
})