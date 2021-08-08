const bcrypt = require('bcrypt')
const User = require('../models/User');
const { generateToken } = require('../../utils/generator')

module.exports = {
  register: ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      if (!username || !password) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const oldUser = await User.findOne({ username })

      if (oldUser) {
        reject('User already exists 🤷‍♂️')
        return;
      }

      password = await bcrypt.hash(password, 12)

      const userRes = await User.create({ username, password }).catch(err => {
        console.log(`[🙆‍♂️😭] failed to create user`)
        console.log("---\n", userData)
        reject('Failed to register 😓')
      })

      const token = generateToken({
        ...userRes._doc,
        id: userRes._id
      });

      const data = {
        username: userRes.username,
        id: userRes._id,
        token
      }

      resolve(data);
    })
  },

  login: ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      if (!username || !password) {
        reject('Required fields not found 🤷‍♂️')
        return
      }

      const user = await User.findOne({ username });

      if (!user) {
        reject('No such user 🤷‍♂️')
        return
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        reject('Incorrect password 🤐')
        return
      }

      const token = generateToken({
        ...user._doc,
        id: user._id
      });

      const data = {
        username: user.username,
        id: user._id,
        token
      }

      resolve(data);
    })
  }
}