const express = require('express')
const {validationResult} = require('express-validator')
const uuid = require('uuid')

const SignupUser = require('../../models/signupUser')
const {emailValidation} = require('../../services/validations/email')
const {transporter} = require('../../services/emails/transporter')
const {forgotPassword} = require('../../services/emails/emails')

const router = express.Router()

router.post('/api/auth/forgot-password', emailValidation, async (req, res) => {
   const {email} = req.body
   const newKey = uuid.v4()

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());
   
   const user = await SignupUser.findOne({ where: { email }})
   if (user === null) res.json({success: false, text: `Sorry, we don't recognize your credentials`})

   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/reset?code=${user.code}&key=${newKey}`
   const emailSend = forgotPassword(email, link)

   try {
      await transporter.sendMail(emailSend.mailOptions)
      await SignupUser.update({key: newKey}, { where: { email }})
      res.json({success: true, text: 'Password reset email sent successfully'})        
   } catch(err) {
      res.status(400).send(err);
   }
})

module.exports = router;