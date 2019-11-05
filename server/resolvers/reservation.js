import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import reservationService from '../services/reservation'
import createReservationValidation from '../services/validations/createReservation'


export default {
   Query: {
      userReservations: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => (
         models.Reservation.findAll({where: {userId}})
      ))
   },

   Mutation: {
      createReservation: {
         validationSchema: createReservationValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => (
               reservationService.createUserReservation(args, userId)
            )
         )
      }
   },
};
