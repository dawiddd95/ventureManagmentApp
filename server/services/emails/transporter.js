const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = {
   transporter: nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.MAIL_USER,
         pass: process.env.MAIL_PASSWORD
      }
   })
}

module.exports = transporter;