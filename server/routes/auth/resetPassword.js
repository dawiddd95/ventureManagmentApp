const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const User = require('../../models/userSignupSchema');
const {passwordValidationSchema} = require('../../utils/validations/password');

router.post('/api/auth/reset-password', passwordValidationSchema,(req, res) => {
   const {password, id} = req.body; 
   const newKey = uuid.v4();
   const hash = bcrypt.hashSync(password, 10);
   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array()); 
   
   User.findOneAndUpdate({_id: id}, {password: hash, key: newKey}, (err, data) => {
      if(data !== null) {    
         res.json({success: true})      
      } else {
         res.json({success: false})
      }
   }); 
})

router.get('/api/auth/reset-password', (req, res) => {
   const {id, key} = req.headers; 
   
   User.findOne({_id: id, key}, (err, data) => {
      if(data !== null) {    
         res.json({success: true})      
      } else {
         res.json({success: false})
      }
   }); 
})


module.exports = router;