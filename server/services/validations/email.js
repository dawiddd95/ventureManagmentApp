const {check} = require('express-validator');

module.exports = {
   emailValidation: [
      check('email', 'Must be correct email format')
         .not().isEmpty()
         .isEmail().normalizeEmail()
         .escape(),
   ]
}

