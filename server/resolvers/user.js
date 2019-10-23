// import funkcji combineResolvers do łączenia resolverów
import {combineResolvers} from 'graphql-resolvers'
// import resolvera isAuthenticated
import {isAuthenticated} from './auth'
// import user z services
import * as userService from '../services/user'

import createUserValidation from '../services/validations/Yup/createUser'

export default {
   Query: {
      // Pierw uruchomi resolver isAuthenticated, jeśli wszystko jest okej to isAuthenticated uruchomi skip
      // skip uruchomi następny resolver po przecinku
      // ten drugi resolver zwraca nam usera gdzie id jest równe userId
      // userId powinno zwrocic id usera => jakas cyfre np: 2
      me: combineResolvers(isAuthenticated, (parent, args, {models, userId}) =>
         models.User.findOne({where: {id: userId}})
      ),
      getUser: (parent, {id}, {models}) => models.User.findOne({where: {id}})
   },
   
   Mutation: {
      // rozbijamy naszą mutację na obiekt
      createUser: {
         // Schema do walidacji z importowanego pliku 
         validationSchema: createUserValidation,
         // Po przecinku logika resolvera tak jak zawsze tylko że dodajemy async
         // (root, args, context, info) to to samo co moje (parent, {name, surname}, {models})
         resolve: async (parent, {name, surname, email, password}, {models}) => (
            userService.createUser(name, surname, email, password)
         ),
      },
      loginUser: (parent, {email, password}, {models}) => ( 
         userService.loginUser(email, password)
      ),
      forgotUserPassword: (parent, {email}, {models}) => (
         userService.forgotPasswordUser(email)
      ),
      updateUser: { 
         validationSchema: createUserValidation,
         resolve: async (parent, {id, name, surname, email, password, key, active, code}, {models}) => (
            models.User.update({name, surname, email, password, key, active, code}, {where: {id}})
         ),
      }
   }
}