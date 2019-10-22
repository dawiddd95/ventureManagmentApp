const {check} = require('express-validator');

module.exports = {
   newBookingValidation: [
      check('client')
         .not().isEmpty()
         .withMessage('Client is required')
         .escape(),
      check('room')
         .optional()
         .escape(),
      check('status')
         .not().isEmpty()
         .withMessage('Status is required')
         .escape(),
      check('bookingStartDate')
         .not().isEmpty()
         .withMessage('Booking Start Date is required')
         .escape(),
      check('bookingStartTime')
         .not().isEmpty()
         .withMessage('Booking Start Time is required')
         .escape(),
      check('bookingEndDate')
         .not().isEmpty()
         .withMessage('Booking End Date is required')
         .escape(),
      check('bookingEndTime')
         .not().isEmpty()
         .withMessage('Booking End Time is required')
         .escape(),
      check('notes')
         .optional()
         .escape(),
      check('employeeNotes')
         .optional()
         .escape(),
      check('cancellationNotes')
         .optional()
         .escape(),
   ]
}