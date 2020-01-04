import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   employees: [],
   sortBy: 'id',
   sortOrder: 'asc',
   selected: [],
   checkSelectAll: false,
   pagination: 5,
   currentPage: 1
}

const fetchedUserEmployees = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USER_EMPLOYEES:
         return produce(state, draftState => {
            draftState.employees = draftState.employees.concat(action.item)
         })

      case types.SEARCH_USER_EMPLOYEES:
         return produce(state, draftState => {
            draftState.employees = action.item
         })

      case types.EMPLOYEES_CLEAR:
         return produce(state, draftState => {
            draftState.employees = []
         })

      case types.EMPLOYEES_SORT_BY:
         return produce(state, draftState => {
            draftState.sortBy = action.item;
         })
         
      case types.EMPLOYEES_SORT_ORDER:
         return produce(state, draftState => {
            draftState.sortOrder = action.item;
         })

      case types.EMPLOYEES_SELECT_ELEMENT: 
         return produce(state, draftState => {
            draftState.selected = draftState.selected.concat(action.item);
         })

      case types.EMPLOYEES_UNSELECT_ELEMENT:
         return produce(state, draftState => {
            draftState.selected = draftState.selected.filter(item => item !== action.item)
         })

      case types.EMPLOYEES_RESET_SELECTED:
         return produce(state, draftState => {
            draftState.selected = action.item
         })

      case types.EMPLOYEES_TOGGLE_SELECT_ALL:
         return produce(state, draftState => {
            draftState.checkSelectAll = action.item
         })

      case types.EMPLOYEES_PAGINATION_VALUE:
         return produce(state, draftState => {
            draftState.pagination = action.item;
         })

      case types.EMPLOYEES_CURRENT_PAGE:
         return produce(state, draftState => {
            draftState.currentPage = action.item;
         })
         
      default:
         return state;
   }
}

export default fetchedUserEmployees;