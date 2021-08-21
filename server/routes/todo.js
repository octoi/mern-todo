const express = require('express');
const router = express.Router();
const todoHelper = require('../mongo/helpers/todo');
const { generateErrorMessage, generateSuccessMessage } = require('../utils/generator')

router.post('/create', (req, res) => {
  todoHelper.createTodo(req.body)
    .then(data => res.json(generateSuccessMessage(data)))
    .catch(data => res.json(generateErrorMessage(data)))
});

module.exports = router;