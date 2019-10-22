const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const db = require('./db/connect')
const path = require('path')
const userRouter = require('./router/userRouter')

app.use(express.static(path.join(__dirname, '../static/')))

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())



app.use('/user', userRouter)

app.use((req, res) => {
  res.send('<div style="width:100%;height:500px;background: linear-gradient(to right,rgb(153, 139, 139), rgb(217, 217, 228));text-align:center;font-size:30px;color:black;line-height:500px;">Welcome to 小裴工作室！！！！！</div>')
})


app.listen(4646, '127.0.0.1', () => {
  console.log('server start')

  console.log('http://127.0.0.1:4646')

})