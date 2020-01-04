import types from './types';

const addUserReservationAction = (item) => ({
   type: types.FETCH_USER_RESERVATIONS, item
})

const searchUserReservationsAction = (item) => ({
   type: types.SEARCH_USER_RESERVATIONS, item
})

const clearReservationsAction = (item) => ({
   type: types.RESERVATIONS_CLEAR, item
})

const sortElementsByAction = (item) => ({
   type: types.RESERVATIONS_SORT_BY, item
})

const sortElementsOrderAction = (item) => ({
   type: types.RESERVATIONS_SORT_ORDER, item
})

const selectNewElementAction = (item) => ({
   type: types.RESERVATIONS_SELECT_ELEMENT, item
}) 

const unselectElementAction = (item) => ({
   type: types.RESERVATIONS_UNSELECT_ELEMENT, item
})

const resetSelectedAction = (item) => ({
   type: types.RESERVATIONS_RESET_SELECTED, item
})

const toggleSelectAllAction = (item) => ({
   type: types.RESERVATIONS_TOGGLE_SELECT_ALL, item
})

const paginationValueAction = (item) => ({
   type: types.RESERVATIONS_PAGINATION_VALUE, item
})

const currentPageAction = (item) => ({
   type: types.RESERVATIONS_CURRENT_PAGE, item
})


export default {
   addUserReservationAction,
   searchUserReservationsAction,
   clearReservationsAction,
   sortElementsByAction,
   sortElementsOrderAction,
   selectNewElementAction,
   unselectElementAction,
   resetSelectedAction,
   toggleSelectAllAction,
   paginationValueAction,
   currentPageAction,
}