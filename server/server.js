const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDb = require('./mongo/config')
const { serverPort } = require('./utils/constants')

const app = express()

connectDb() // connect to mongo db

app.use(cors())
app.use(bodyParser.json());

app.use('/user', require('./routes/user'))
app.use('/todo', require('./routes/todo'))

app.listen(serverPort, () => console.log(`[🚀] server started on http://localhost:${serverPort}/`))