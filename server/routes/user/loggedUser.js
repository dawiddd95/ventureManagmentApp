const express = require('express');
const router = express.Router();
const checkToken = require('../../services/token/checkToken');
const jwtDecode = require('jwt-decode');

const SignupUser = require('../../models/signupUser');

router.get('/api/user/loggedUser', checkToken, async (req, res) => {
   const authorization = req.headers.authorization;
   const split = authorization.split(' ');
   const token = split[1];
   const decodedToken = jwtDecode(token);
   const tokenCode = decodedToken.code;

   const user = await SignupUser.findOne({ where: { code: tokenCode }});

   const loggedUser = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
   }

   res.json({loggedUser})      
})

module.exports = router;