import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   reservations: [],
   sortBy: 'id',
   sortOrder: 'asc',
   selected: [],
   checkSelectAll: false,
   pagination: 5,
   currentPage: 1
}

const fetchedUserReservations = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.reservations = draftState.reservations.concat(action.item)
         })

      case types.SEARCH_USER_RESERVATIONS:
         return produce(state, draftState => {
            draftState.reservations = action.item
         })

      case types.RESERVATIONS_CLEAR:
         return produce(state, draftState => {
            draftState.reservations = []
         })

      case types.RESERVATIONS_SORT_BY:
         return produce(state, draftState => {
            draftState.sortBy = action.item;
         })
         
      case types.RESERVATIONS_SORT_ORDER:
         return produce(state, draftState => {
            draftState.sortOrder = action.item;
         })

      case types.RESERVATIONS_SELECT_ELEMENT: 
         return produce(state, draftState => {
            draftState.selected = draftState.selected.concat(action.item);
         })

      case types.RESERVATIONS_UNSELECT_ELEMENT:
         return produce(state, draftState => {
            draftState.selected = draftState.selected.filter(item => item !== action.item)
         })

      case types.RESERVATIONS_RESET_SELECTED:
         return produce(state, draftState => {
            draftState.selected = action.item
         })

      case types.RESERVATIONS_TOGGLE_SELECT_ALL:
         return produce(state, draftState => {
            draftState.checkSelectAll = action.item
         })

      case types.RESERVATIONS_PAGINATION_VALUE:
         return produce(state, draftState => {
            draftState.pagination = action.item;
         })

      case types.RESERVATIONS_CURRENT_PAGE:
         return produce(state, draftState => {
            draftState.currentPage = action.item;
         })

      default:
         return state;
   }
}

export default fetchedUserReservations;