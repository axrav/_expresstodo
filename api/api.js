const router = require('express').Router();
const { CreateTask, ListTasks, UpdateTask, DeleteTask } = require('../helpers/helpers');


// create task route
router.post("/createtask", (req, res) => {
    const task = req.body;
    CreateTask(task).then((task) => {
        return res.status(200).json(task);
    }).catch((err) => {
        return res.status(500).json(err);
    })
})

// list tasks route
router.get("/listtasks", (req, res) => {
    ListTasks().then((tasks) => {
        return res.status(200).json(tasks);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
)
// update task by id
router.put("/updatetask/:id", (req, res) => {
    const id = req.params.id;
    const task = req.body;
    UpdateTask(id, task).then((task) => {
        return res.status(200).json(task);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
)

// delete task by id
router.delete("/deletetask/:id", (req, res) => {
    const id = req.params.id;
    DeleteTask(id).then((task) => {
        return res.status(200).json(task);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}
)

module.exports = router;