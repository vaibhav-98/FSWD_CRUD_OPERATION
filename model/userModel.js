const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
      name: {
        type: String,
        require: [true, 'User name is require'],
        minLength: [5, 'Name must be at least 5  char'],
        maxLength: [25,  'Name must be at least 25 chr'],
        trim: true
      },

      email: {
        type: String,
        require: [true, 'user email id is require'],
        unigue: [true, 'already register']
      },
      password: {
        type: String,
        select: false
      }, 

},{timestamps:true})

module.exports = mongoose.model('User', userSchema)

