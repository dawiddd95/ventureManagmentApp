import types from './types';

const addUserReservationAction = (item) => ({
   type: types.FETCH_USER_RESERVATIONS, item
})

const searchUserReservationsAction = (item) => ({
   type: types.SEARCH_USER_RESERVATIONS, item
})

const filterAction = (item) => ({
   type: types.RESERVATIONS_FILTER, item
})

const sortReservationsByAction = (item) => ({
   type: types.RESERVATIONS_SORT_BY, item
})

const sortReservationsOrderAction = (item) => ({
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

const deleteSearchingElementsAction = (item) => ({
   type: types.RESERVATIONS_DELETE_SEARCHING_ELEMENTS, item
})


export default {
   addUserReservationAction,
   searchUserReservationsAction,
   filterAction,
   sortReservationsByAction,
   sortReservationsOrderAction,
   selectNewElementAction,
   unselectElementAction,
   resetSelectedAction,
   toggleSelectAllAction,
   paginationValueAction,
   deleteSearchingElementsAction
}