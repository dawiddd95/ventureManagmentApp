import types from './types';

const addLoggedUserAction = (item) => ({
   type: types.FETCH_LOGGED_USER, item
})

export default {
   addLoggedUserAction,
}