const Sequelize = require('sequelize')
const db = require('../config/database')

const SignupUser = db.define('signupuser', {
   surname: {
      type: Sequelize.STRING,
      allowNull: false
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false
   },
   key: {
      type: Sequelize.STRING,
      allowNull: false
   },
   active: {
      type: Sequelize.BOOLEAN,
      allowNull: false
   },
   code: {
      type: Sequelize.STRING,
      allowNull: false
   }, 
   roles: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
   }
})

module.exports = SignupUser;