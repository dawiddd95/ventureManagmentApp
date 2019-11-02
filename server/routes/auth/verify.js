import express from 'express';
import models from '../../db/models';

const router = express.Router();

router.get('/auth/verify', async (req, res) => {
   const {code, key} = req.headers;

   const isExist = await models.User.findOne({ where: {code, key, active: false} });

   if(isExist === null) {
      res.json({
         header: 'Try verifying your email again', 
         text: 'Your request to verify your email has expired or the link has already been used'
      })
   } 
   
   try {
      await models.User.update({active: true}, { where: {code, key, active: false} });     
      res.json({
         header: 'Your email has been verified',
         text: 'You can now sign in with your new account'
      })
   } catch(err) {
      res.status(400).send(err)
   }
})

module.exports = router;