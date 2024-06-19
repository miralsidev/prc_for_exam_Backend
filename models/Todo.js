const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    files :[
        {
            path:{
                type: String,
                required: true
            },
            size:{
                type: String,
                required: true
            }
        }
    ]
})
const todo = mongoose.model('todo', ToDoSchema);
module.exports = { todo }