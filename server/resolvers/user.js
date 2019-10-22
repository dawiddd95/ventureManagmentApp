// import funkcji combineResolvers do łączenia resolverów
import {combineResolvers} from 'graphql-resolvers'
// import resolvera isAuthenticated
import {isAuthenticated} from './auth'
// import user z services
import * as userService from '../services/user'

export default {
   Query: {
      // Pierw uruchomi resolver isAuthenticated, jeśli wszystko jest okej to isAuthenticated uruchomi skip
      // skip uruchomi następny resolver po przecinku
      // ten drugi resolver zwraca nam usera gdzie id jest równe userId
      me: combineResolvers(isAuthenticated, (parent, args, {models, userId}) => 
         models.User.findOne({where: {id: userId}})
      ),
      getUser: (parent, {id}, {models}) => models.User.findOne({where: {id}})
   },
   
   Mutation: {
      createUser: (parent, {name, surname, email, password, key, active, code}, {models}) => 
         userService.createUser(name, surname, email, password, key, active, code),
      loginUser: (parent, {email, password}, {models}) => 
         userService.loginUser(email, password),
      updateUser: (parent, {id, name, surname, email, password, key, active, code}, {models}) => 
         models.User.update({name, surname, email, password, key, active, code}, {where: {id}}),
   }
}