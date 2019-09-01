const express = require('express');
const router = express.Router();

const User = require('../../models/userSignupSchema');

router.get('/auth/verify', (req, res) => {
   const {id, key} = req.headers;
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host');
   const link = `${req.protocol}://${host}`;

   if(link === `http://${host}`) {
      User.findOneAndUpdate({id, key, active: false}, {active: true}, (err, data) => {
         if(data !== null) {
            res.json({
               header: 'Your email has been verified',
               text: 'You can now sign in with your new account'
            })
         } else {
            res.json({
               header: 'Try verifying your email again', 
               text: 'Your request to verify your email has expired or the link has already been used'
            })
         }
      })
   }
})

module.exports = router;