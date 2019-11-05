import actions from './actions';

const fetchLoggedUserReservations = (data) => (dispatch) => {
   dispatch(actions.addUserReservationAction(data))
}

export default {
   fetchLoggedUserReservations
}