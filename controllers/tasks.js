const getAllTasks = (req,res) =>{
    res.send('all tasks')
}

const getTask = (req,res) =>{
    res.send('one task')
}

const createTask = (req,res) =>{
    res.send('add tasks')
}

const updateTask = (req,res) =>{
    res.send('update tasks')
}

const deleteTask = (req,res) =>{
    res.send('delete tasks')
}

module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};