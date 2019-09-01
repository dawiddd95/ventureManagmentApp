const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const User = require('../../models/userSignupSchema');
const {signupValidationSchema} = require('../../utils/validations/signup');
const emailSettings = require('../../utils/emails/verifyEmail');
const {transporter} = require('../../utils/emails/transporter');

router.post('/api/auth/signup', signupValidationSchema, async (req, res) => {
   const {name, surname, email, password, active} = req.body;

   const key = uuid.v4();
   const userID = uuid.v4();
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host');
   const link = `${host}/auth/verify?id=${userID}&key=${key}`;
   const options = emailSettings(email, link);
   
   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array()); 

   const emailExist = await User.findOne({email});
   if (emailExist) return res.json({success: false, err: 'Email is already in usage', email: ''})
     
   const hashPassword = await bcrypt.hash(password, 10);

   const signupUser = new User({
      id: userID, name, surname, email, active, key, password: hashPassword, roles: [
         'bookings', 'clients', 'users', 'orders', 'settings'
      ]
   });

   try {
      await transporter.sendMail(options.mailOptions);
      await signupUser.save();
      res.json({success: true, err: '', email})   
   } catch(err) {
      res.status(400).send(err);
   }
})

module.exports = router;