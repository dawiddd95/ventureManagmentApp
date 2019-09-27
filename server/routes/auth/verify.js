const express = require('express');
const router = express.Router();

const SignupUser = require('../../models/signupUser');

router.get('/auth/verify', async (req, res) => {
   const {code, key} = req.headers;
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host');
   const link = `${req.protocol}://${host}`;

   if(link === `http://${host}`) {
      const isExist = await SignupUser.findOne({ where: {code, key, active: false} });

      if(isExist === null) {
         res.json({
            header: 'Try verifying your email again', 
            text: 'Your request to verify your email has expired or the link has already been used'
         })
      } else {
         SignupUser.update({active: true}, { where: {code, key, active: false} });
   
         res.json({
            header: 'Your email has been verified',
            text: 'You can now sign in with your new account'
         })
      }
   }
})

module.exports = router;