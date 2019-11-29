import actions from './actions';

const fetchLoggedUserEmployees = (data) => (dispatch) => {
   dispatch(actions.addUserEmployeeAction(data))
}

export default {
   fetchLoggedUserEmployees
}