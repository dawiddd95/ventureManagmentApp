import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   reservations: {},
   sortBy: 'id',
   sortOrder: 'asc',
   selected: []
}

// Jest jeden reducer, który ogarnia wszystkie jego akcje
const fetchedUserReservations = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.reservations = {...action.item}
         })

      case types.SORT_BY:
         return produce(state, draftState => {
            draftState.sortBy = action.item
         })
         
      case types.SORT_ORDER:
         return produce(state, draftState => {
            draftState.sortOrder = action.item
         })

      case types.SELECT_ELEMENT: 
         return produce(state, draftState => {
            draftState.selected = draftState.selected.concat(action.item)
         })

      case types.UNSELECT_ELEMENT:
         return produce(state, draftState => {
            // tutaj teraz jestem
         })

      default:
         return state;
   }
}

export default fetchedUserReservations;