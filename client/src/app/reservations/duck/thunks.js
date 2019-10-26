import actions from './actions';
import axios from 'axios';

const fetchLoggedUserReservations = () => (dispatch) => {
   const token = localStorage.getItem('token');
      
   // pobrac ze storea id usera zalogowanego

   // tutaj inna sciezka chyba get i z servera na bookings
   //  oraz wyslanie w headers id zalogowanego usera
   axios.get('/api/user/loggedUser', {
      headers: {
         'Authorization': 'Bearer ' + token
      }
   })
   .then(res => dispatch(actions.addUserBookingAction(res.data.loggedUser)))
}

export default {
   fetchLoggedUserReservations
}