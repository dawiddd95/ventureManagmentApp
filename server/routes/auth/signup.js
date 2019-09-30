const express = require('express')
const {validationResult} = require('express-validator')
const uuid = require('uuid')
const bcrypt = require('bcrypt')

const SignupUser = require('../../models/signupUser')
const {signupValidation} = require('../../services/validations/signup')
const {transporter} = require('../../services/emails/transporter')
const {verifyEmail} = require('../../services/emails/emails')

const router = express.Router();

router.post('/api/auth/signup', signupValidation, async (req, res) => {
   const {surname, name, email, password, active} = req.body

   const key = uuid.v4()
   const code = uuid.v4()
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/verify?code=${code}&key=${key}`
   
   const emailSend = verifyEmail(email, link)
   
   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array())

   const emailExist = await SignupUser.findOne({ where: {email} })
   if (emailExist) return res.json({success: false, err: 'Email is already in usage', email: ''})
 
   const hashPassword = await bcrypt.hash(password, 10)

   const userData = {
      surname, name, email, password: hashPassword, key, active, code, 
      roles: [
         'bookings', 'clients', 'users', 'orders', 'settings'
      ]
   }

   try {
      await transporter.sendMail(emailSend.mailOptions)
      await SignupUser.create(userData);
      res.json({success: true, err: '', email})   
   } catch(err) {
      res.status(400).send(err)
   }
})

module.exports = router;