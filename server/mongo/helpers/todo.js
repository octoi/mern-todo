const Todo = require('../models/Todo');
const User = require('../models/User');

module.exports = {
  getAllTodos: ({ username }) => {
    return new Promise(async (resolve, reject) => {
      if (!username) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const user = await User.findOne({ username });

      if (!user) {
        reject('No such user 🤷‍♂️')
        return;
      }

      const todos = await Todo.find({ user: user?._id }).catch((err) => {
        console.log(`[📝😭] failed to fetch todos`)
        reject('Failed to fetch todo 😓')
      });

      resolve(todos?.reverse());
    });
  },

  createTodo: ({ username, todo }) => {
    return new Promise(async (resolve, reject) => {
      if (!username || !todo) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const user = await User.findOne({ username });

      if (!user) {
        reject('No such user 🤷‍♂️')
        return;
      }

      const todoRes = Todo.create({ user: user?.id, title: todo, resolved: false }).catch(err => {
        console.log(`[📝😭] failed to create todo`)
        reject('Failed to create todo 😓')
      });

      resolve(todoRes)
    });
  },

  deleteTodo: ({ username, todoId }) => {
    return new Promise(async (resolve, reject) => {
      if (!username || !todoId) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const user = await User.findOne({ username });

      if (!user) {
        reject('No such user 🤷‍♂️')
        return;
      }

      const todo = await Todo.findById(todoId).catch(err => {
        console.log(err)
        console.log(`[📝😭] failed to delete todo`)
        reject('Failed to delete todo 😓')
      });

      if (!todo) {
        reject('No such todo in database 🤐')
      }

      if (todo?.user != user?.id) {
        reject('Access denied, you don\'t have authorization to delete this todo 👮‍♂️')
      }

      await Todo.findByIdAndDelete(todoId).catch(err => {
        console.log(`[📝😭] failed to delete todo`)
        reject('Failed to delete todo 😓')
      })

      resolve('Todo deleted successfully 🤖')
    });
  }
}