const express = require('express');
const router = express.Router();
const checkToken = require('../../utils/token/checkToken');
const jwtDecode = require('jwt-decode');

const Users = require('../../models/userSignupSchema');

router.get('/api/user/loggedUser', checkToken, (req, res) => {
   const authorization = req.headers.authorization;
   const split = authorization.split(' ');
   const token = split[1];
   const decodedToken = jwtDecode(token);
   const id = decodedToken.id;

   Users.findOne({id}, (err, data) => {
      const loggedUser = {
         name: data.name,
         surname: data.surname,
         email: data.email,
      }

      res.json({loggedUser})      
   });
})

module.exports = router;