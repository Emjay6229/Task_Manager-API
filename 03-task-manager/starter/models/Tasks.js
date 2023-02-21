const mongoose = require("mongoose")
const { Schema } = mongoose


const TaskSchema = new Schema ({
    name: { 
        type: String, 
        trim: true, 
        required: [ true, "Please provide task name" ],
        maxlength: [20, 'Name cannot be more than 20 characters'] 
    },
    completed: { 
        type: Boolean,
        default: false
     }
})

module.exports = mongoose.model('Task', TaskSchema)

