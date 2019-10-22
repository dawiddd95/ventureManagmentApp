import * as userService from '../services/user'

export default {
   Query: {
      loggedUser: (parent, args, {models, userId}) => {
         if(userId) {
            return models.User.findOne({where: {id: userId}})
         } else {
            return null
         }
      },
      getUser: (parent, {id}, {models}) => models.User.findOne({where: {id}})
   },
   
   Mutation: {
      createUser: (parent, {name, surname, email, password, key, active, code}, {models}) => {
         return userService.createUser(name, surname, email, password, key, active, code)
         // models.User.create({name, surname, email, password, key, active, code})
      },
      loginUser: (parent, {email, password}, {models}) => {
         return userService.loginUser(email, password)
      },
      updateUser: (parent, {id, name, surname, email, password, key, active, code}, {models}) => {
         models.User.update({name, surname, email, password, key, active, code}, {where: {id}})
      }
   }
}