import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   employees: {},
   searchingEmployees: [],
   filter: false,
   sortBy: 'id',
   sortOrder: 'asc',
   selected: [],
   checkSelectAll: false,
   pagination: '5',
}

const fetchedUserEmployees = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_EMPLOYEES:
         return produce(state, draftState => {
            draftState.employees = {...action.item};
         })

      default:
         return state;
   }
}

export default fetchedUserEmployees;