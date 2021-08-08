require('dotenv').config()

const jwtKey = process.env.JWT_KEY || 'n3v3r gonn4 g1v3 y0u up :)'
const serverPort = process.env.PORT || 5000;
const mongoDbUrl = process.env.CONNECTION_URL || 'mongodb://127.0.0.1:27017/merntodo'

module.exports = { jwtKey, serverPort, mongoDbUrl }