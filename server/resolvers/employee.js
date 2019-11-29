import Sequelize from 'sequelize'

import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import createEmployeeValidation from '../services/validations/createEmployee'

//const Op = Sequelize.Op;

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
      // updateReservation: {
      //    validationSchema: updateReservationValidation,
      //    resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => {
      //       args.userId = userId
      //       return await models.Reservation.update(args, {where: {id: args.id} })
      //    })
      // },
      // deleteReservations: combineResolvers(isAuthenticated, (parent, {id}, { models, userId }) => (
      //    models.Reservation.destroy({where: {
      //       id: {
      //          [Op.in]: id
      //       }
      //    }})
      // )),
   }
};
