const jwt = require('jsonwebtoken');
const { jwtKey } = require('./constants')

const generateErrorMessage = message => {
  return {
    status: 404,
    message,
  }
}

const generateSuccessMessage = message => {
  return {
    status: 200,
    message,
  }
}

const generateToken = user => {
  return jwt.sign({
    id: user.id,
    username: user.username,
  }, jwtKey, { expiresIn: '1h' });
}

module.exports = { generateErrorMessage, generateSuccessMessage, generateToken, }