import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   reservations: {}
}

export const fetchedUserReservations = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_RESERVATIONS: 
         return produce(state, draftState => {
            draftState.reservations = {...action.item}
         })
       
      default:
         return state;
   }
}
