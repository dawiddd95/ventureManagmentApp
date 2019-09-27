const nodemailer = require('nodemailer');

const transporter = {
   transporter: nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: "venture.managment.app.team@gmail.com",
         pass: "Dawid1995"
      }
   })
}

module.exports = transporter