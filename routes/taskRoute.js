const Router = require('express');
const router = Router();
const validator = require("../helpers/validator");
// InMemory Resources for Data
let taskArrData = [];
let ID_INCREMENT = 0;

// GET /tasks: Retrieve all tasks.
router.get('/',(req,res)=>{
    if(!taskArrData.length)
        return res.status(200).send("No Tasks Found");
    return res.status(200).json(taskArrData);
})


// GET /tasks/<id> : Retrieve a single task by its ID.
router.get('/:taskId',(req,res)=>{
    let taskId = req.params.taskId;
    if(!taskArrData.length)
        return res.status(200).send("There are no tasks available to be fetch");
    let task = taskArrData.find(val=>val.id == taskId);
    if(!task){
        return res.status(404).send("Task not found");
    }
    res.status(200).send(task)
})

// POST /tasks : Create a new task.
router.post('/',(req,res)=>{
    const userProvidedDetails = req.body;

    if(validator.validateTaskDetails(userProvidedDetails).status){
        userProvidedDetails['id'] = ++ID_INCREMENT;
        taskArrData.push(userProvidedDetails);
        return res.status(201).send(validator.validateTaskDetails(userProvidedDetails).message)
    }
    return res.status(400).json(validator.validateTaskDetails(userProvidedDetails));
   
})



// PUT : Update an existing task by its ID.
router.put('/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    const userProvidedDetails = req.body;
    let task = taskArrData.filter(val=>val.id == taskId);
    
    if(!task.length){
        return res.status(404).send("Task not found");
    }

    if(validator.validateTaskDetails(userProvidedDetails).status){
        taskArrData.map((val)=>{
            if(val.id == taskId){
                val['title'] = userProvidedDetails.title;
                val['description'] = userProvidedDetails.description;
                val['completed'] = userProvidedDetails.completed;
            }
        })
        return res.status(200).send("Task Updated Successfully")
    }
    return res.status(400).json(validator.validateTaskDetails(userProvidedDetails));
})


router.delete('/:taskId',(req,res)=>{
    const taskId = req.params.taskId;
    let task = taskArrData.filter(val=>val.id == taskId);
    if(!task.length){
        return res.status(404).send("Task not found");
    }
    taskArrData = taskArrData.filter(val=>val.id != taskId)
    return res.status(200).send("Task Deleted Successfully")
})

module.exports = router;