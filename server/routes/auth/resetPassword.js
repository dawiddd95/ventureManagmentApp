const express = require('express')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const SignupUser = require('../../models/signupUser');
const {passwordValidationSchema} = require('../../utils/validations/password')

const router = express.Router();

router.get('/api/auth/reset-password', async (req, res) => {
   const {code, key} = req.headers; 
   const isValid = await SignupUser.findOne({ where: { code, key }})
   
   if(isValid === null) res.json({success: false})
   else res.json({success: true})      
})

router.post('/api/auth/reset-password', passwordValidationSchema, async (req, res) => {
   const {password, code} = req.body; 
   const newKey = uuid.v4();
   const hash = bcrypt.hashSync(password, 10);

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array()); 
   
   const isExist = await SignupUser.findOne({ where: { code }})
   if (isExist === null) res.json({success: false});
   
   try {
      await SignupUser.update({password: hash, key: newKey}, { where: {code} });
      res.json({success: true})
   } catch(err) {
      res.status(400).send(err);
   }
})

module.exports = router