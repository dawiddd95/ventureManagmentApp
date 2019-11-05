import actions from './actions';

const fetchLoggedUserAction = (data) => (dispatch) => {
   dispatch(actions.addLoggedUserAction(data))
}


export default {
   fetchLoggedUserAction
}