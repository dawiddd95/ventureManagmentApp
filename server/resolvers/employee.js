import Sequelize from 'sequelize'

import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import createEmployeeValidation from '../services/validations/createEmployee'
import updateEmployeeValidation from '../services/validations/updateEmployee'

const Op = Sequelize.Op;

export default {
   Query: {
      userEmployees: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => (
         models.Employee.findAll({where: {userId}})
      )),
   },

   Mutation: {
      createEmployee: {
         validationSchema: createEmployeeValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => {
            args.userId = userId
            return await models.Employee.create(args)
         })
      },
      updateEmployee: {
         validationSchema: updateEmployeeValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => {
            args.userId = userId
            return await models.Employee.update(args, {where: {id: args.id} })
         })
      },
      deleteEmployees: combineResolvers(isAuthenticated, (parent, {id}, { models, userId }) => (
         models.Employee.destroy({where: {
            id: {
               [Op.in]: id
            }
         }})
      )),
   }
};
