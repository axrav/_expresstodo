const Task = require("../db/schema");
// create task by mongoose
const CreateTask = async (task) => {
    try {
        const newTask = await Task.create(task);
        return newTask;
    }
    catch (err) {
        return err;
    }

}
// list tasks by mongoose
const ListTasks = async () => {
    try {
        const tasks = await Task.find();
        return tasks;
    }
    catch (err) {
        return err;
    }
}
// update task by id and mongoose
const UpdateTask = async (id, task) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
        return updatedTask;
    }
    catch (err) {
        return err;
    }
}
// delete task by id and mongoose
const DeleteTask = async (id) => {
    try {

        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    }
    catch (err) {
        return err;
    }
    
}

module.exports = {
    CreateTask,
    ListTasks,
    UpdateTask,
    DeleteTask,
}