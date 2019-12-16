import Sequelize from 'sequelize';

import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import createReservationValidation from '../services/validations/createReservation'
import updateReservationValidation from '../services/validations/updateReservation'

const Op = Sequelize.Op;

export default {
   Query: {
      userReservations: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => (
         models.Reservation.findAll({where: {userId}})
      )),
      getUserReservation: combineResolvers(isAuthenticated, async (parent, {id}, { models, userId }) => (
         models.Reservation.findOne({where: {userId, id}})
      )),
   },

   Mutation: {
      createReservation: {
         validationSchema: createReservationValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => {
            args.userId = userId
            return await models.Reservation.create(args)
         })
      },
      updateReservation: {
         validationSchema: updateReservationValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => {
            args.userId = userId
            return await models.Reservation.update(args, {where: {id: args.id} })
         })
      },
      deleteReservations: combineResolvers(isAuthenticated, (parent, {id}, { models, userId }) => (
         models.Reservation.destroy({where: {
            id: {
               [Op.in]: id
            }
         }})
      )),
   }
};
