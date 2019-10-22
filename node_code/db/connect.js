const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('db connect')
})

module.exports = db