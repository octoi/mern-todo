const mongoose = require('mongoose')
const { mongoDbUrl } = require('../utils/constants')

const connectDb = async () => {
  await mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }).catch(err => {
    console.log(`[😭] mongo db failed to connect to ${mongoDbUrl}`)
    console.log("---\n", err)
    process.exit(1)
  })

  console.log(`[😀] mongo db connected to ${mongoDbUrl}`)
}

module.exports = connectDb;