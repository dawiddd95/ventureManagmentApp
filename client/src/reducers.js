import { combineReducers } from 'redux';
// import fetchedLoggedUser from './app/user/duck'; 
import menuVisibility from './app/navbar/duck';

const rootReducer = combineReducers({
   // fetchedLoggedUser,
   menuVisibility
})

export default rootReducer;