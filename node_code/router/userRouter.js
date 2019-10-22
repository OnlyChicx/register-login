const express = require('express')
const router = express.Router()
const User = require('../db/models/userSchema')
const fs = require('fs')

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
})

router.post('/reg', (req, res) => {
  let { uname, pword } = req.body

  if (uname && pword) {
    User.find({ uname })
      .then((data) => {
        if (data.length === 0) {
          return User.insertMany({ uname, pword })
        } else {
          // res.send({ err: -2, msg: '该邮箱已注册' })
          throw new Error('no ok')
        }
      })
      .then(() => {
        res.send({ err: 0, msg: '注册成功' })
      })
      .catch((err) => {
        res.send({ err: -1, msg: 'no ok' })
      })
  } else {
    res.send({ err: -3, msg: '请输入用户名或密码' })
  }

})

router.get('/test', (req, res) => {
  fs.readFile('../page/index.html', 'utf8', (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      console.log(err)
    }
  })
})

module.exports = router