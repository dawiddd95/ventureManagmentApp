import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   user: {}
}

const fetchedLoggedUser = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_LOGGED_USER: 
         return produce(state, draftState => {
            draftState.user = {...action.item}
         })
       
      default:
         return state;
   }
}

export default fetchedLoggedUser;