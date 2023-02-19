// @file app.js
require('dotenv').config()
const express = require("express")

app = express()

// Import application modules
const tasks = require('./routes/TaskRouter')
const notFound = require("./middlewares/not-found")
const connect_db = require('./config/database')
const errorHandler = require('./middlewares/errorMiddleware')

//connect to Database
connect_db();

const { PORT } = process.env || 3000

// express middlewares
app.use(express.static("./public"))
app.use(express.json())

// mount route on URL
app.use('/api/v1/tasks', tasks)

// custom middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`)
})