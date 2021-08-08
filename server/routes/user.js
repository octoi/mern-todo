const express = require('express')
const router = express.Router()
const userHelper = require('../mongo/helpers/user')
const { generateErrorMessage, generateSuccessMessage } = require('../utils/generator')

router.post('/register', (req, res) => {
  userHelper.register(req.body)
    .then(data => res.json(generateSuccessMessage(data)))
    .catch(data => res.json(generateErrorMessage(data)))
})

router.post('/login', (req, res) => {
  userHelper.login(req.body)
    .then(data => res.json(generateSuccessMessage(data)))
    .catch(data => res.json(generateErrorMessage(data)))
})

module.exports = router