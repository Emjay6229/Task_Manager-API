const router = require("express").Router();
const controller = require('../controllers/TaskController')

router.route('/')
    .get(controller.getAllTasks)
    .post(controller.createTask)

router.route('/:id')
    .get(controller.getSingleTask)
    .patch(controller.updateTask)
    .delete(controller.deleteTask)

module.exports = router;