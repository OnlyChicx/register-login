const mongoose = require('mongoose')

let user = mongoose.Schema({
  uname: String,
  pword: String
})

let User = mongoose.model('User', user)

module.exports = User