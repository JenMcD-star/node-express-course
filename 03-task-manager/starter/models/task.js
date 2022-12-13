const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String, conpleted:Boolean
})

module.export = mongoose.model('Task', TaskSchema)