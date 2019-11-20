import {combineResolvers} from 'graphql-resolvers'
import {isAuthenticated} from './auth'

import userService from '../services/user'

import createUserValidation from '../services/validations/createUser'
import updateUserValidation from '../services/validations/updateUser'

export default {
   Query: {
      me: combineResolvers(isAuthenticated, (parent, args, {models, userId}) => 
         models.User.findOne({where: {id: userId}})
      ),
   },

   Mutation: {
      createUser: {
         validationSchema: createUserValidation,
         //  tutaj chyba można message: ({value}) => `Email ${email} is already taken`
         resolve: async (parent, {name, surname, email, password}, {models}) => (
            userService.createUser(name, surname, email, password)
         ),
      },
      loginUser: (parent, {email, password}, {models}) => ( 
         userService.loginUser(email, password)
      ),
      forgotUserPassword: (parent, {email}, {models}) => (
         userService.forgotPassword(email)
      ),
      updateUser: { 
         validationSchema: updateUserValidation,
         resolve: async (parent, {id, name, surname, email, password, key, active}, {models}) => (
            models.User.update({name, surname, email, password, key, active}, {where: {id}})
            //userService.updateUser(id, name, surname, email, password, key, active)
         ),
      }
   }
}