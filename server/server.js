const express = require('express')
const connectDb = require('./mongo/config');
const { serverPort } = require('./utils/constants')

const app = express()

connectDb() // connect to mongo db

app.use('/user', require('./routes/user'))

app.listen(serverPort, () => console.log(`[🚀] server started on http://localhost:${serverPort}/`))