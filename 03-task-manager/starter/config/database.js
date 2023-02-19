require('dotenv').config()

const mongoose = require("mongoose")
const { CONNECTION_STRING } = process.env

const connect = async (uri=CONNECTION_STRING) => {
  try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        mongoose.set('strictQuery', true);
        console.log("CONNECTED TO DATABASE...!")
  } catch (err) {
    console.log(err.message)
  }  
}

module.exports = connect