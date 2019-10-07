const express = require('express')
const {validationResult} = require('express-validator')
const uuid = require('uuid')

const SignupUser = require('../../models/signupUser')
const {emailValidation} = require('../../services/validations/email')
const {transporter} = require('../../services/emails/transporter')
const {forgotPassword} = require('../../services/emails/emails')

const router = express.Router()

// kontrakt :
// 1. Zwrócenie błędów walidacji jeśli coś jest nie tak,
// 2. NIE zwracanie błędów walidacji kiedy wszystko okej
// 3. Zwrócenie użytkownika z bazy danych jeśli istnieje (Jego obiekt lub cos)
// 4. Zwrócenie status 200 jeśli użytkownik istnieje
// 5. Zwrócenie status 404 jeśli użytkownik o email nie istnieje 
// 6. Wysłanie emaila jeśli user istnieje, nie wysyłanie kiedy nie istnieje
// 7. zupdatewanie usera jeśli istnieje, nie robienie tego kiedy nie istnieje
// 8. Zwrócenie jsona o odpowiedniej tresci

router.post('/api/auth/forgot-password', emailValidation, async (req, res) => {
   const {email} = req.body
   const newKey = uuid.v4()

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array())
   
   const user = await SignupUser.findOne({ where: { email }})
   if (user === null) return res.sendStatus(404)

   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/reset?code=${user.code}&key=${newKey}`
   const emailSend = forgotPassword(email, link)

   try {
      await transporter.sendMail(emailSend.mailOptions)
      await SignupUser.update({key: newKey}, { where: { email }})
      res.json({success: true, text: 'Password reset email sent successfully'})        
   } catch(err) {
      console.log(err)
   }
})

module.exports = router;