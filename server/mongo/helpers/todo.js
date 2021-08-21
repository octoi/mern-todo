const Todo = require('../models/Todo');
const User = require('../models/User');

module.exports = {
  createTodo: ({ username, todo }) => {
    return new Promise(async (resolve, reject) => {
      if (!username || !todo) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const user = await User.findOne({ username })

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
  }
}