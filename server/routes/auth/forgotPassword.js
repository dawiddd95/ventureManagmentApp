const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');

const User = require('../../models/userSignupSchema');
const {emailValidationSchema} = require('../../utils/validations/email');
const emailSettings = require('../../utils/emails/forgotPassword');
const {transporter} = require('../../utils/emails/transporter');

router.post('/api/auth/forgot-password', emailValidationSchema, async (req, res) => {
   const {email} = req.body; 
   const newKey = uuid.v4();

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array()); 
   
   const emailExist = await User.findOneAndUpdate({email}, {key: newKey});
   if (!emailExist) return res.json({success: false, text: `Sorry, we don't recognize your credentials`})

   const user = await User.findOne({email});

   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host');
   const link = `${host}/auth/reset?id=${user._id}&key=${user.key}`;
   const options = emailSettings(email, link);
   
   try {
      await transporter.sendMail(options.mailOptions);
      res.json({success: true, text: 'Password reset email sent successfully'})        
   } catch(err) {
      res.status(400).send(err);
   }
})

module.exports = router;