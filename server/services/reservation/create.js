import models from '../../db/models'

const createUserReservation = async (args, userId) => {
   args.userId = userId
   const reservation = await models.Reservation.create(args)

   return reservation
}

export default createUserReservation