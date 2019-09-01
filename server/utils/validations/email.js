const {check} = require('express-validator');

module.exports = {
   emailValidationSchema: [
      check('email', 'Must be correct email format')
         .not().isEmpty()
         .isEmail().normalizeEmail()
         .escape(),
   ]
}