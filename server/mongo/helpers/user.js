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

      const userExists = await User.findOne({ username })
      if (userExists) {
        reject('User already exists 🤷‍♂️')
        return
      }

      password = await bcrypt.hash(password, 12).catch(err => {
        reject("Failed to hash")
        return
      });

      const userRes = await User.create({ username, password }).catch(err => {
        console.log(`[🙆‍♂️😭] failed to create user`)
        console.log("---\n", userData)
        reject('Failed to register 😓')
      })

      const token = generateToken({
        ...userRes._doc,
        id: userRes._id,
      });

      const data = {
        username: userRes.username,
        id: userRes._id,
        token
      }

      resolve(data)
    })
  }
}