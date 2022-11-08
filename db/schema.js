const { default: mongoose } = require("mongoose");


// task schema
const task = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    }
)

// defining model
const Task = mongoose.model("Task", task);


module.exports = Task;