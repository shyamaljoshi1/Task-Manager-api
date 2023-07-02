const Task = require('../models/Tasks');
const asyncWrapper = require('../middleware/async');
const { creteCustomError } = require('../errors/custom-error');


const getAllTasks = asyncWrapper(async(req,res) =>{
    const task = await Task.find({});
    res.status(200).json({task});
})

const getTask = asyncWrapper(async(req,res) =>{
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if(!task){
        return creteCustomError(`No task with id : ${taskID}`,404)
    }
    res.status(200).json({task});
})

const createTask = asyncWrapper(async(req,res) =>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
})

const updateTask = asyncWrapper(async(req,res) =>{
    const {id:taskID} = req.params;

    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true,
    })

    if(!task){
        return creteCustomError(`No task with id : ${taskID}`,404)  
    }
    
})

const deleteTask = asyncWrapper(async(req,res) =>{
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task){
        return creteCustomError(`No task with id : ${taskID}`,404)
    }

    res.status(200).json({task:null , status: 'success' });
})

module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};