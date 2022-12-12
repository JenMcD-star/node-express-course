const getAlltasks = (req, res) => {
    res.send('all items from file')
}

const createtask = (req, res) =>{
    res.json(req.body)
}

const gettask = (req, res) =>{
    res.json({id:req.params.id})
}
const updateask = (req, res) =>{
    res.send('update task')
}

const deletetask = (req, res) =>{
    res.send('delete task')
}
module.exports = {
    getAlltasks, createtask,gettask,updateask,deletetask
}