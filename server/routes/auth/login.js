const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {loginValidation} = require('../../services/validations/login')
const SignupUser = require('../../models/signupUser');

const router = express.Router()

router.post('/api/auth/login', loginValidation, async (req, res) => {
   const {email, password} = req.body;

   const user = await SignupUser.findOne({ where: {email, active: true} });
   if(user === null) return res.json({success: false, err: 'Wrong user or password'});

   const passwordIsValid = await bcrypt.compare(password, user.password);
   if(!passwordIsValid) return res.json({success: false, err: 'Wrong user or password'});

   const token = jwt.sign({code: user.code}, process.env.TOKEN_SECRET);
   res.header('token', token).json({success: true, err: '', token});
})

module.exports = router;