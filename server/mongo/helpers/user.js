const bcrypt = require('bcrypt')
const User = require('../models/User');

module.exports = {
  register: async (userData) => {
    return new Promise((resolve, reject) => {
      const { username, password } = userData

      const userExists = await User.findOne({ username })

      if (userExists) {
        reject('User already exists 🤷‍♂️')
        return
      }

      password = await bcrypt.hash(password, 10)

      const newUser = await User.create({ username, password }).catch(err => {
        console.log(`[🙆‍♂️😭] failed to create user`)
        console.log("---\n", userData)
        reject('Failed to register 😓')
      })

      const token = generateToken({
        ...newUser._doc,
        id: newUser._id
      });

      const data = {
        username: newUser.username,
        id: newUser._id,
        token
      }

      resolve(data)
    })
  }
}