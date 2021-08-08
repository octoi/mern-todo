const dotenv = require('dotenv');
const express = require('express')
const connectDb = require('./mongo/config');

dotenv.config()
const app = express()

connectDb() // connect to mongo db

app.get('/', (req, res) => {
    res.send("Node rocks")
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`[🚀] server started on http://localhost:${port}/`))