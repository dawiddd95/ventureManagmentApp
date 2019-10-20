import actions from './actions';
import axios from 'axios';

const fetchLoggedUserAction = () => (dispatch) => {
   const token = localStorage.getItem('token');
      
   axios.get('/api/user/loggedUser', {
      headers: {
         'Authorization': 'Bearer ' + token
      }
   })
   .then(res => dispatch(actions.addLoggedUserAction(res.data.loggedUser)))
}

// NORMALNIE TUTAJ BYLBY DO BOOKINGS =>  fetchUserBookingsAction
// DO DANYCH O ZALOGOWNYM UZYTKOWNIKU UZYLBYM => fetchUserDataAction

export default {
   fetchLoggedUserAction
}