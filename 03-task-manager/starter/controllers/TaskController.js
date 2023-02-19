const Task = require("../models/Tasks")
const asyncWrapper = require("../middlewares/async")
const { createCustomError } = require("../error/custom-error")


// Create Task
const createTask = asyncWrapper(async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.status(200).json({ task })
})


// Get all Tasks
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks, Task_amount: tasks.length })
  })


// Get a Single Task
const getSingleTask = asyncWrapper(async (req, res, next) => {
    const taskID = { _id: req.params.id }
    const task = await Task.findOne(taskID)

    if (!task) { 
      return next(createCustomError("No task with ID " + req.params.id, 404))
    }

    res.status(200).json({ task })
  })


// Update Tasks
const updateTask =  asyncWrapper(async (req, res) => {
    const taskID = { _id: req.params.id }
    const task = await Task.findOneAndUpdate(taskID, req.body, {new: true, runValidators: true})

    if (!task) {
      return next(createCustomError("No task with ID " + req.params.id, 404))
    }

    res.status(200).json({ task })
})


// Delete Tasks
const deleteTask =  asyncWrapper(async (req, res) => {
    const taskID = { _id: req.params.id }
    const task = await Task.findOneAndDelete(taskID)

    if (!task) {
      return next(createCustomError("No task with ID " + req.params.id, 404))
    }
    
    res.status(200).json({ message: "Success! Task has been removed" })
})


module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask }