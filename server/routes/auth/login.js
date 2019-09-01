const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/userSignupSchema');
const {loginValidationSchema} = require('../../utils/validations/login');


router.post('/api/auth/login', loginValidationSchema, async (req, res) => {
   const {email, password} = req.body;

   const user = await User.findOne({email, active: true});
   if(!user) return res.json({success: false, err: 'Wrong user or password', id: ''});

   const passwordIsValid = await bcrypt.compare(password, user.password);
   if(!passwordIsValid) return res.json({success: false, err: 'Wrong user or password', id: ''});

   const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET);
   res.header('token', token).json({success: true, err: '', token});
})

module.exports = router;