const express = require('express')
const {validationResult} = require('express-validator')

const Booking = require('../../models/booking')
const {newBookingValidation} = require('../../services/validations/newBooking')

const router = express.Router();

router.post('/api/user/bookings/new', newBookingValidation, async (req, res) => {
   const body = req.body
   // Tutaj zmienic by nie dawalo sztywno userId
   body.userId = 5;
   
   const errors = validationResult(req)
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array())

   try {
      await Booking.create(body);
      res.json({success: true})   
   } catch(err) {
      res.status(400).send(err)
   }
})

module.exports = router;