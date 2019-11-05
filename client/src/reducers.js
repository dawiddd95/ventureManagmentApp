import { combineReducers } from 'redux';

import fetchedLoggedUser from './app/user/duck'; 
import menuVisibility from './app/navbar/duck';
import fetchedUserReservations from './app/reservations/duck';

const appReducer = combineReducers({
   fetchedLoggedUser,
   menuVisibility,
   fetchedUserReservations
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}

export default rootReducer;