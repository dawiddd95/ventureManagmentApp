import types from './types';

const addUserReservationAction = (item) => ({
   type: types.FETCH_USER_RESERVATIONS, item
})

export default {
   addUserReservationAction,
}