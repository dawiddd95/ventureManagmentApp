import types from './types';

const addUserReservationAction = (item) => ({
   type: types.FETCH_USER_RESERVATIONS, item
})

const sortReservationsByAction = (item) => ({
   type: types.SORT_BY, item
})

const sortReservationsOrderAction = (item) => ({
   type: types.SORT_ORDER, item
})

export default {
   addUserReservationAction,
   sortReservationsByAction,
   sortReservationsOrderAction
}