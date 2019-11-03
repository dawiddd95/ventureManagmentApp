import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from './auth'

import reservationService from '../services/reservation'
import createReservationValidation from '../services/validations/createReservation'


export default {
   // Query: {
   //    allBoats: (parent, args, { models }) =>
   //       models.Boat.findAll()
   // },

   // Boat: {
   //    user: async (boat, args, { loaders }) =>
   //       await loaders.user.load(boat.userId)
   // },

   Mutation: {
      createReservation: {
         validationSchema: createReservationValidation,
         resolve: combineResolvers(isAuthenticated, async (parent, args, { models, userId }) => (
               // Przekazujemy do funkcji wszystkie argumenty bo w destrukturyzacji byłoby tego za dużo no i możemy zrobić destrukturyzację w funkcji oraz przekazujemy userId z contextu
               // NIE DZIALALO BO W services/reservation NIE STWORZYLEM PLIKU ZBIORCZEGO INDEX.JS
               // Skoro zabrałem z mutacji createReservation(userId: Int!) to args już nie zawiera pola userId więc muszę je dorzucić ręcznie
               reservationService.createUserReservation(args, userId)
            )
         )
      }
   },
};
