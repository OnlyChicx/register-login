const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1063321504@qq.com', // generated ethereal user
    pass: 'ubmbkbjtmwlzbdjd' // generated ethereal password
  }
})




function sendToUser(data) {
  let info = {
    from: '"Fred Foo 👻" <1063321504@qq.com>', // sender address
    to: '1063321504@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    // html: '<b>Hello world?</b>' // html body
  }


  transporter.sendMail(info)
}

module.exports = { sendToUser }