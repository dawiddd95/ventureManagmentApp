import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import reservationService from '../services/reservation'
import createReservationValidation from '../services/validations/createReservation'


export default {
   // Query: {
   //    allBoats: (parent, args, { models }) =>
   //       models.Boat.findAll()
   // },

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
