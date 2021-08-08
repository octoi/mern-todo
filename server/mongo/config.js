require('dotenv').config()
const mongoose = require('mongoose')

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://127.0.0.1:27017/merntodo'

const connectDb = async () => {
  await mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }).catch(err => {
    console.log(`[😭] mongo db failed to connect to ${CONNECTION_URL}`)
    console.log("---\n", err)
    process.exit(1)
  })

  console.log(`[😀] mongo db connected to ${CONNECTION_URL}`)
}

module.exports = connectDb;