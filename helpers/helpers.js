const Task = require("../db/schema");
// create task by mongoose
const CreateTask = async (task) => {
    const newTask = new Task(task);
    await newTask.save();
    return newTask;

}
// list tasks by mongoose
const ListTasks = async () => {
    const tasks = await Task.find();
    return tasks;
}
// update task by id and mongoose
const UpdateTask = async (id, task) => {
    const updatedTask = await Task.findByIdAndUpdate(id, task);
    return updatedTask;
}
// delete task by id and mongoose
const DeleteTask = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    return deletedTask;
}

module.exports = {
    CreateTask,
    ListTasks,
    UpdateTask,
    DeleteTask,
}