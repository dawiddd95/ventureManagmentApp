import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   reservations: {},
   searchingReservations: [],
   filter: false,
   sortBy: 'id',
   sortOrder: 'asc',
   selected: [],
   checkSelectAll: false,
   pagination: '5',
}

const fetchedUserReservations = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.reservations = {...action.item};
         })

      case types.SEARCH_USER_RESERVATIONS:
         return produce(state, draftState => {
            draftState.searchingReservations = action.item
         })

      case types.FILTER: 
         return produce(state, draftState => {
            draftState.filter = action.item
         })

      case types.SORT_BY:
         return produce(state, draftState => {
            draftState.sortBy = action.item;
         })
         
      case types.SORT_ORDER:
         return produce(state, draftState => {
            draftState.sortOrder = action.item;
         })

      case types.SELECT_ELEMENT: 
         return produce(state, draftState => {
            draftState.selected = draftState.selected.concat(action.item);
         })

      case types.UNSELECT_ELEMENT:
         return produce(state, draftState => {
            draftState.selected = draftState.selected.filter(item => item !== action.item)
         })

      case types.RESET_SELECTED:
         return produce(state, draftState => {
            draftState.selected = action.item
         })

      case types.TOGGLE_SELECT_ALL:
         return produce(state, draftState => {
            draftState.checkSelectAll = action.item
         })

      case types.PAGINATION_VALUE:
         return produce(state, draftState => {
            draftState.pagination = action.item;
         })

      case types.DELETE_SEARCHING_ELEMENTS:
         return produce(state, draftState => {
            draftState.searchingReservations = state.searchingReservations.filter(
               item => !action.item.includes(item.id)
            )
         })

      default:
         return state;
   }
}

export default fetchedUserReservations;